import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/v/vswup76ym.css';
import '../../css/a/azekob9bv.css';
import '../../css/e/ekrvckbis.css';
import '../../css/u/uvbyt22_q.css';
import '../../css/x/xclrt1s_v.css';
import '../../css/n/n-eyyv4cc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVG777GFdrh" cx="9.18" cy="4.58" r="18.3" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="vswup76ym wm-shadow"/><path fill="url(#SVGDCUexbkg)" class="azekob9bv wm-a"/><path fill="url(#SVG777GFdrh)" class="ekrvckbis wm-k"/><path class="uvbyt22_q wm-shine"/><path class="wm-deco xclrt1s_v"/><path class="n-eyyv4cc wm-deco"/></g>`,
		"fallback": "withicons-rangoli:sky-lantern",
	});
}

export default Component;
