import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/l/lgdnscsqv.css';
import '../../css/v/vr5o0lw8k.css';
import '../../css/q/qxoopx_ua.css';
import '../../css/t/tjs14bcik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGznbnZbGx" cx="5.12" cy="4.04" r="12.54" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="lgdnscsqv wm-shadow"/><path fill="url(#SVGDCUexbkg)" class="vr5o0lw8k wm-a"/><path fill="url(#SVGznbnZbGx)" class="qxoopx_ua wm-k"/><path class="tjs14bcik wm-shine"/></g>`,
		"fallback": "withicons-rangoli:ungroup",
	});
}

export default Component;
