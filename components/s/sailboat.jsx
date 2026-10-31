import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/b/b1udcdczg.css';
import '../../css/y/yxvvoabbp.css';
import '../../css/g/gyo32p7jm.css';
import '../../css/j/jk70bjvqs.css';
import '../../css/a/anifnq7qb.css';
import '../../css/v/v2fa06fjv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVG4qGL4deJ" cx="7.42" cy="5.19" r="23.78" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="b1udcdczg wm-shadow"/><path fill="url(#SVGDCUexbkg)" class="wm-a yxvvoabbp"/><path fill="url(#SVG4qGL4deJ)" class="gyo32p7jm wm-k"/><path fill="url(#SVGDCUexbkg)" class="jk70bjvqs wm-a"/><path class="anifnq7qb wm-deco"/><path class="v2fa06fjv wm-deco"/></g>`,
		"fallback": "withicons-rangoli:sailboat",
	});
}

export default Component;
