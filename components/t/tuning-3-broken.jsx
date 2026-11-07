import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/h_tsn8bxt.css';
import '../../css/i/imrhgbc8c.css';
import '../../css/n/np1e_hbeg.css';
import '../../css/q/qkb6nu2hb.css';
import '../../css/q/qpr92sbth.css';
import '../../css/m/ml0f3uy3t.css';
import '../../css/j/j3t_yv6ja.css';
import '../../css/n/n9mrrlban.css';
import '../../css/c/cl5kvxb6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle transform="rotate(180 12 12)" class="h_tsn8bxt"/><circle transform="rotate(180 20 14)" class="imrhgbc8c"/><circle transform="matrix(-1 0 0 1 6 8)" class="np1e_hbeg"/><path class="qkb6nu2hb"/><path class="qpr92sbth"/><path class="ml0f3uy3t"/><path class="j3t_yv6ja"/><path class="n9mrrlban"/><path class="cl5kvxb6w"/></g>`,
		"fallback": "solar:tuning-3-broken",
	});
}

export default Component;
