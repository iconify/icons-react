import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/z/z_b040zpz.css';
import '../../css/t/tbem-4bds.css';
import '../../css/s/su92l7bmu.css';
import '../../css/k/kr0el-b9b.css';
import '../../css/d/d0rpkw8kr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGAVG7WcyS" cx="8.66" cy="7.74" r="19.35" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path fill="url(#SVGDCUexbkg)" class="wm-deco z_b040zpz"/><path class="tbem-4bds wm-deco"/><path class="su92l7bmu wm-shadow"/><path fill="url(#SVGAVG7WcyS)" class="kr0el-b9b wm-k"/><path class="d0rpkw8kr wm-shine"/></g>`,
		"fallback": "withicons-rangoli:octagon-alert",
	});
}

export default Component;
