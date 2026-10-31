import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/p/pb1fvuj6g.css';
import '../../css/w/w-so_ebcy.css';
import '../../css/k/ksvgmnwwz.css';
import '../../css/x/xje9v2bmx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGF4b0CeYL" x1="9" x2="15" y1="2.51" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGF4b0CeYL)" class="pb1fvuj6g"/><path class="w-so_ebcy wm-shine"/><path class="ksvgmnwwz wm-shine"/><path class="wm-shine xje9v2bmx"/></g>`,
		"fallback": "withicons-utsav:radio",
	});
}

export default Component;
