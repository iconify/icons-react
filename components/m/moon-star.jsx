import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/w/wntrc8jgw.css';
import '../../css/q/qm-k_7a-w.css';
import '../../css/d/dk-pszb1u.css';
import '../../css/u/u6h4mnbth.css';
import '../../css/x/xclrt1s_v.css';
import '../../css/d/dzw-occnn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGU00zieBw" cx="7.64" cy="6.46" r="25.2" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="wm-shadow wntrc8jgw"/><path fill="url(#SVGU00zieBw)" class="qm-k_7a-w wm-k"/><path class="dk-pszb1u wm-shine"/><path class="u6h4mnbth wm-s"/><path class="wm-deco xclrt1s_v"/><path class="dzw-occnn wm-deco"/></g>`,
		"fallback": "withicons-rangoli:moon-star",
	});
}

export default Component;
