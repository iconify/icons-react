import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/g/g_6w67b3i.css';
import '../../css/u/uuiecrxeo.css';
import '../../css/e/e-0mnzbos.css';
import '../../css/g/g6qu_53ug.css';
import '../../css/n/nci8wbb8i.css';
import '../../css/d/dzw-occnn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGeJK7kewY" cx="8.08" cy="8.52" r="22.66" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="g_6w67b3i wm-shadow"/><path fill="url(#SVGDCUexbkg)" class="uuiecrxeo wm-a"/><path fill="url(#SVGeJK7kewY)" class="e-0mnzbos wm-k"/><path class="g6qu_53ug wm-shine"/><path class="nci8wbb8i wm-deco"/><path class="dzw-occnn wm-deco"/></g>`,
		"fallback": "withicons-rangoli:timer",
	});
}

export default Component;
