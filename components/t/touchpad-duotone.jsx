import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p4x738b2e.css';
import '../../css/d/danvb0bjd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p4x738b2e secondary"/><path class="danvb0bjd primary"/></g>`,
		"fallback": "iconaut:touchpad-duotone",
	});
}

export default Component;
