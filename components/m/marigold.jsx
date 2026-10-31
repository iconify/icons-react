import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qzt-gibbg.css';
import '../../css/p/py9iyjbxy.css';
import '../../css/t/ti6oipbsp.css';
import '../../css/f/f6jb4abse.css';
import '../../css/h/hhmqr5q4x.css';
import '../../css/g/gyytzlc5m.css';
import '../../css/d/dzw-occnn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGXE3wIb5w" cx="7.34" cy="6.06" r="26.98" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="qzt-gibbg wm-shadow"/><path fill="url(#SVGXE3wIb5w)" class="py9iyjbxy wm-k"/><path class="ti6oipbsp wm-k"/><path class="f6jb4abse wm-k"/><path class="hhmqr5q4x wm-shine"/><path class="gyytzlc5m wm-deco"/><path class="dzw-occnn wm-deco"/></g>`,
		"fallback": "withicons-rangoli:marigold",
	});
}

export default Component;
