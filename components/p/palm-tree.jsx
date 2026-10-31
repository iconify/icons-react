import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/n/n8zk7kb_o.css';
import '../../css/c/c_pe-3did.css';
import '../../css/a/aeijehtvc.css';
import '../../css/c/c84iw84qb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGc4inh9Ii" cx="7.42" cy="6.94" r="24.7" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="n8zk7kb_o wm-shadow"/><path fill="url(#SVGDCUexbkg)" class="c_pe-3did wm-a"/><path fill="url(#SVGc4inh9Ii)" class="aeijehtvc wm-k"/><path class="c84iw84qb wm-shine"/></g>`,
		"fallback": "withicons-rangoli:palm-tree",
	});
}

export default Component;
