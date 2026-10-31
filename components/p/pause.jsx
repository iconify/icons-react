import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/p/phw38abmz.css';
import '../../css/z/zdy1cxb7w.css';
import '../../css/v/vflo8nxkc.css';
import '../../css/g/gyytzlc5m.css';
import '../../css/n/nqrq7rbor.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGrIGitepC" cx="8.74" cy="7.02" r="20.83" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="phw38abmz wm-shadow"/><path fill="url(#SVGrIGitepC)" class="wm-k zdy1cxb7w"/><path class="vflo8nxkc wm-shine"/><path class="gyytzlc5m wm-deco"/><path class="nqrq7rbor wm-deco"/></g>`,
		"fallback": "withicons-rangoli:pause",
	});
}

export default Component;
