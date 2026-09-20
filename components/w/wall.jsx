import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fpf011s-x.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fpf011s-x"/>`,
		"fallback": "temaki:wall",
	});
}

export default Component;
