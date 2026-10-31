import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/f/fn1xanb3x.css';
import '../../css/l/l9ztx1bfl.css';
import '../../css/h/htf50dbgu.css';
import '../../css/h/h9eg9ikwc.css';
import '../../css/v/v6w3_qble.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGurLHhwvX" cx="7.78" cy="11.3" r="20.97" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path fill="url(#SVGDCUexbkg)" class="fn1xanb3x wm-a"/><path fill="url(#SVGurLHhwvX)" class="l9ztx1bfl wm-k"/><path class="htf50dbgu wm-deco"/><path fill="url(#SVGDCUexbkg)" class="h9eg9ikwc wm-deco"/><path class="v6w3_qble wm-deco"/></g>`,
		"fallback": "withicons-rangoli:redo",
	});
}

export default Component;
