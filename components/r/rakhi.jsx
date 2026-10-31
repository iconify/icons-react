import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/w/w75mc7bno.css';
import '../../css/h/h8u3vtb1j.css';
import '../../css/y/ymt-20bjh.css';
import '../../css/x/xilnojjeq.css';
import '../../css/i/igkvd8nvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGcbYuKeUx" cx="8.52" cy="7.58" r="20.11" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="w75mc7bno wm-shadow"/><path fill="url(#SVGDCUexbkg)" class="h8u3vtb1j wm-a"/><path fill="url(#SVGcbYuKeUx)" class="wm-k ymt-20bjh"/><path class="wm-shine xilnojjeq"/><path class="igkvd8nvv wm-s"/></g>`,
		"fallback": "withicons-rangoli:rakhi",
	});
}

export default Component;
