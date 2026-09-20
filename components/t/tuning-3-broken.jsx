import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/h_tsn8bxt.css';
import '../../css/i/imrhgbc8c.css';
import '../../css/n/np1e_hbeg.css';
import '../../css/h/hp9b0ab8o.css';
import '../../css/j/jy1t3k0nu.css';
import '../../css/x/x83-tfbdc.css';
import '../../css/j/j3t_yv6ja.css';
import '../../css/q/qwroo3vih.css';
import '../../css/o/otatq47sp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle transform="rotate(180 12 12)" class="h_tsn8bxt"/><circle transform="rotate(180 20 14)" class="imrhgbc8c"/><circle transform="matrix(-1 0 0 1 6 8)" class="np1e_hbeg"/><path class="hp9b0ab8o"/><path class="jy1t3k0nu"/><path class="x83-tfbdc"/><path class="j3t_yv6ja"/><path class="qwroo3vih"/><path class="otatq47sp"/></g>`,
		"fallback": "solar:tuning-3-broken",
	});
}

export default Component;
