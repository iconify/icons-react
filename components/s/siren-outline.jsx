import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wethgabtb.css';
import '../../css/r/rpehk_grd.css';
import '../../css/q/qlhp-t4sb.css';
import '../../css/r/rmon3qypk.css';
import '../../css/o/ouws2u0qm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wethgabtb"/><path class="rpehk_grd"/><path clip-rule="evenodd" class="qlhp-t4sb"/><path class="rmon3qypk"/><path class="ouws2u0qm"/></g>`,
		"fallback": "solar:siren-outline",
	});
}

export default Component;
