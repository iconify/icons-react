import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/o/oyikubblx.css';
import '../../css/s/sl9wn38vd.css';
import '../../css/g/ga9w1ckvf.css';
import '../../css/x/xmnja4oqp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGkGMuJcgN" cx="14.84" cy="8.14" r="15.23" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="oyikubblx wm-shadow"/><path fill="url(#SVGDCUexbkg)" class="sl9wn38vd wm-a"/><path fill="url(#SVGkGMuJcgN)" class="ga9w1ckvf wm-k"/><path class="wm-shine xmnja4oqp"/></g>`,
		"fallback": "withicons-rangoli:list-todo",
	});
}

export default Component;
