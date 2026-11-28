import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jk-g6sbdp.css';
import '../../css/f/ft9uhc9jo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jk-g6sbdp secondary"/><path class="ft9uhc9jo primary"/></g>`,
		"fallback": "iconaut:newspaper-duotone",
	});
}

export default Component;
