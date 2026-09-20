import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rwj4vwrpu.css';
import '../../css/r/r2mp_5bnc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rwj4vwrpu"/><path class="r2mp_5bnc"/></g>`,
		"fallback": "reicon:power-duotone",
	});
}

export default Component;
