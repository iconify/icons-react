import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qmd94jbca.css';
import '../../css/y/ybbzxiafx.css';
import '../../css/d/d-sntbois.css';
import '../../css/j/j23heacez.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGHTb8Admw" cx="8.08" cy="10.47" r="21.12" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="qmd94jbca wm-shadow"/><path fill="url(#SVGHTb8Admw)" class="wm-k ybbzxiafx"/><path class="d-sntbois wm-shine"/><path class="j23heacez wm-s"/></g>`,
		"fallback": "withicons-rangoli:siren",
	});
}

export default Component;
