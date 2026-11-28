import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/feovambhv.css';
import '../../css/b/b32-67bwf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="feovambhv secondary"/><path class="b32-67bwf primary"/></g>`,
		"fallback": "iconaut:volume-knob-duotone",
	});
}

export default Component;
