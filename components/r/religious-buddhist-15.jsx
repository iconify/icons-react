import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rcri1bbkf.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rcri1bbkf"/>`,
		"fallback": "maki:religious-buddhist-15",
	});
}

export default Component;
