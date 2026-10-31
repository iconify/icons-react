import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/l/ly6jjw3tv.css';
import '../../css/r/roegllumi.css';
import '../../css/m/m2iof_zzj.css';
import '../../css/p/p-v-6bc3q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGJo3LHcQQ" cx="4.96" cy="8.86" r="15.24" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path fill="url(#SVGDCUexbkg)" class="ly6jjw3tv wm-a"/><path fill="url(#SVGJo3LHcQQ)" class="roegllumi wm-k"/><path class="m2iof_zzj wm-deco"/><path class="p-v-6bc3q wm-deco"/></g>`,
		"fallback": "withicons-rangoli:variable",
	});
}

export default Component;
