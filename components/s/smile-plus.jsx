import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/m/mshg_sbtv.css';
import '../../css/o/oeohgtbfc.css';
import '../../css/c/c5jco4bci.css';
import '../../css/g/g_qgcibls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGavMCLdXZ" cx="6.58" cy="8.52" r="22.66" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="mshg_sbtv wm-shadow"/><path fill="url(#SVGavMCLdXZ)" class="oeohgtbfc wm-k"/><path class="c5jco4bci wm-shine"/><path class="g_qgcibls wm-s"/></g>`,
		"fallback": "withicons-rangoli:smile-plus",
	});
}

export default Component;
