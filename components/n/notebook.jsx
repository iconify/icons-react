import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/p/psmy-pbwd.css';
import '../../css/w/wo3umug_l.css';
import '../../css/k/koa44iy_q.css';
import '../../css/j/jpzx8wzjn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGxYgrDcVu" cx="9.52" cy="6.18" r="23.51" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="psmy-pbwd wm-shadow"/><path fill="url(#SVGxYgrDcVu)" class="wm-k wo3umug_l"/><path fill="url(#SVGDCUexbkg)" class="koa44iy_q wm-a"/><path class="jpzx8wzjn wm-shine"/></g>`,
		"fallback": "withicons-rangoli:notebook",
	});
}

export default Component;
