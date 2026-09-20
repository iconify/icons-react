import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/falbdf9et.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="falbdf9et"/>`,
		"fallback": "subway:magic",
	});
}

export default Component;
