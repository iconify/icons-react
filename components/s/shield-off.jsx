import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/i/igpnp3rhx.css';
import '../../css/l/lufs4vh_p.css';
import '../../css/z/zl01lfb_r.css';
import '../../css/p/p7shhrbbj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVG1DtEedzw" cx="8.3" cy="6.18" r="24.06" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="igpnp3rhx wm-shadow"/><path fill="url(#SVG1DtEedzw)" class="lufs4vh_p wm-k"/><path class="wm-shine zl01lfb_r"/><path class="p7shhrbbj wm-s"/></g>`,
		"fallback": "withicons-rangoli:shield-off",
	});
}

export default Component;
