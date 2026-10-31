import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/y/yl15bqzen.css';
import '../../css/u/uuxez2bdm.css';
import '../../css/g/gbxhnh-vh.css';
import '../../css/m/mh81is0jf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGDrjAuZMb" cx="7.6" cy="6.8" r="24.9" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="wm-shadow yl15bqzen"/><path fill="url(#SVGDrjAuZMb)" class="uuxez2bdm wm-k"/><path class="gbxhnh-vh wm-shine"/><path stroke="url(#SVGDCUexbkg)" class="mh81is0jf wm-a"/></g>`,
		"fallback": "withicons-rangoli:message-square-text",
	});
}

export default Component;
