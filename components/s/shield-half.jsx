import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/s/svlgan13i.css';
import '../../css/f/fklu_fb4s.css';
import '../../css/v/va32bzt8n.css';
import '../../css/y/y54p9jrfh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGr4EOrb4l" cx="8.3" cy="6.46" r="23.37" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="svlgan13i wm-shadow"/><path fill="url(#SVGr4EOrb4l)" class="fklu_fb4s wm-k"/><path fill="url(#SVGDCUexbkg)" class="va32bzt8n wm-a"/><path class="wm-shine y54p9jrfh"/></g>`,
		"fallback": "withicons-rangoli:shield-half",
	});
}

export default Component;
