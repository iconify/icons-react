import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/y/yr8alkfai.css';
import '../../css/u/u5i1chb7z.css';
import '../../css/u/upav8tmwc.css';
import '../../css/w/wwct_nb5a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGLPiY5Uup" cx="8.51" cy="6.54" r="22.78" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="wm-shadow yr8alkfai"/><path fill="url(#SVGLPiY5Uup)" class="u5i1chb7z wm-k"/><path class="upav8tmwc wm-deco"/><path class="wm-deco wwct_nb5a"/></g>`,
		"fallback": "withicons-rangoli:mic-vocal",
	});
}

export default Component;
