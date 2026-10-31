import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/v/v2ukonb-w.css';
import '../../css/g/gema6boqc.css';
import '../../css/j/ja3_5e_go.css';
import '../../css/o/o_yj33g3y.css';
import '../../css/o/o6zz_ccgw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGtr98uc5V" cx="8.9" cy="6.7" r="18" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path fill="url(#SVGtr98uc5V)" class="v2ukonb-w wm-k"/><path class="gema6boqc wm-shadow"/><path class="ja3_5e_go wm-k"/><path class="o_yj33g3y wm-deco"/><path class="o6zz_ccgw wm-shine"/></g>`,
		"fallback": "withicons-rangoli:map-pin",
	});
}

export default Component;
