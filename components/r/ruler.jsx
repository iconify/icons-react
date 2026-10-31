import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/a/ajcvtgvmz.css';
import '../../css/s/szszjzxij.css';
import '../../css/f/f5i68pbes.css';
import '../../css/i/i8mrfcc3b.css';
import '../../css/s/sto_3jo_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGssztEN0r" cx="7.42" cy="6.18" r="26.47" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="ajcvtgvmz wm-shadow"/><path fill="url(#SVGssztEN0r)" class="szszjzxij wm-k"/><path class="f5i68pbes wm-deco"/><path fill="url(#SVGDCUexbkg)" class="i8mrfcc3b wm-deco"/><path class="sto_3jo_h wm-deco"/></g>`,
		"fallback": "withicons-rangoli:ruler",
	});
}

export default Component;
