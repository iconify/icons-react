import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/i/i9x17-bey.css';
import '../../css/m/msm0cjb8y.css';
import '../../css/h/hl9a64zff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGO7aImiCH" cx="8" cy="8" r="20" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path stroke="url(#SVGO7aImiCH)" class="i9x17-bey wm-k"/><path stroke="url(#SVGDCUexbkg)" class="msm0cjb8y wm-a"/><path class="hl9a64zff wm-deco"/></g>`,
		"fallback": "withicons-rangoli:repeat",
	});
}

export default Component;
