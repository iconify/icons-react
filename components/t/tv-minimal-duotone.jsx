import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hvtg4_a0m.css';
import '../../css/h/hhoe54_cc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hvtg4_a0m secondary"/><path class="hhoe54_cc primary"/></g>`,
		"fallback": "iconaut:tv-minimal-duotone",
	});
}

export default Component;
