import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/j/j3qbk-bio.css';
import '../../css/t/to_p27upp.css';
import '../../css/k/kihivnblv.css';
import '../../css/m/mb7tyxb8k.css';
import '../../css/g/g_a7azbto.css';
import '../../css/l/l7xplrbdi.css';
import '../../css/q/qa6h4-bcz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGU00zieBw" cx="7.64" cy="6.46" r="25.2" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="j3qbk-bio wm-shadow"/><path fill="url(#SVGU00zieBw)" class="to_p27upp wm-k"/><path class="kihivnblv wm-shine"/><path class="mb7tyxb8k wm-s"/><path class="g_a7azbto wm-deco"/><path fill="url(#SVGDCUexbkg)" class="l7xplrbdi wm-deco"/><path class="qa6h4-bcz wm-deco"/></g>`,
		"fallback": "withicons-rangoli:phone-off",
	});
}

export default Component;
