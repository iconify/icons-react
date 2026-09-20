import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eq_3nt3js.css';
import '../../css/r/r0ch1sbxc.css';
import '../../css/j/j798wsbhd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="eq_3nt3js"/><path clip-rule="evenodd" class="r0ch1sbxc"/><path class="j798wsbhd"/></g>`,
		"fallback": "reicon:money-plus",
	});
}

export default Component;
