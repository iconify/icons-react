import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/u/ugy2kwb2a.css';
import '../../css/a/a4_rjebph.css';
import '../../css/p/pviueh0mi.css';
import '../../css/u/uj5_9ybtj.css';
import '../../css/a/as6owuxue.css';
import '../../css/s/sexn2-mps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVG9S7RNz9X" cx="8.14" cy="6.74" r="24.57" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="ugy2kwb2a wm-shadow"/><path fill="url(#SVG9S7RNz9X)" class="a4_rjebph wm-k"/><path class="pviueh0mi wm-shine"/><path class="uj5_9ybtj wm-deco"/><path fill="url(#SVGDCUexbkg)" class="as6owuxue wm-deco"/><path class="sexn2-mps wm-deco"/></g>`,
		"fallback": "withicons-rangoli:send-horizontal",
	});
}

export default Component;
