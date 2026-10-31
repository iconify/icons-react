import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/i/icvosknez.css';
import '../../css/l/lra-63t1f.css';
import '../../css/g/g5s3xnbcb.css';
import '../../css/r/rg-cy9xka.css';
import '../../css/s/s_7m7xb8m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGkmzeyege" cx="7.2" cy="5.86" r="23.71" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="icvosknez wm-shadow"/><path fill="url(#SVGDCUexbkg)" class="lra-63t1f wm-a"/><path fill="url(#SVGkmzeyege)" class="g5s3xnbcb wm-k"/><path class="rg-cy9xka wm-shine"/><path class="s_7m7xb8m wm-s"/></g>`,
		"fallback": "withicons-rangoli:screen-share",
	});
}

export default Component;
