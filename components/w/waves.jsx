import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/m/mhmr6-clf.css';
import '../../css/f/fur945byd.css';
import '../../css/g/gyytzlc5m.css';
import '../../css/o/oifuhjsio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGkXSJmdjG" cx="7.56" cy="10.54" r="18.77" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path fill="url(#SVGDCUexbkg)" class="mhmr6-clf wm-a"/><path fill="url(#SVGkXSJmdjG)" class="fur945byd wm-k"/><path class="gyytzlc5m wm-deco"/><path class="oifuhjsio wm-deco"/></g>`,
		"fallback": "withicons-rangoli:waves",
	});
}

export default Component;
