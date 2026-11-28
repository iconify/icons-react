import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fb5w38aej.css';
import '../../css/o/ogl8u2vwl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fb5w38aej secondary"/><path class="ogl8u2vwl primary"/></g>`,
		"fallback": "iconaut:triangle-right-split-duotone",
	});
}

export default Component;
