import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m3cdlmwtm.css';
import '../../css/b/bdhc-hm_u.css';
import '../../css/g/gk8gx7whk.css';
import '../../css/h/h0zqot9pw.css';
import '../../css/a/alyihb0gj.css';
import '../../css/w/wk_lp_wlk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path fill="url(#SVGwMGcTdTJ)" class="m3cdlmwtm"/><path fill="url(#SVGXkR4Jcvj)" class="bdhc-hm_u"/><defs><linearGradient id="SVGwMGcTdTJ" x1="3.872" x2="10.725" y1=".279" y2="14.525" gradientUnits="userSpaceOnUse"><stop class="gk8gx7whk"/><stop offset="1" class="h0zqot9pw"/></linearGradient><linearGradient id="SVGXkR4Jcvj" x1="6" x2="8.466" y1="5" y2="11.575" gradientUnits="userSpaceOnUse"><stop class="alyihb0gj"/><stop offset="1" class="wk_lp_wlk"/></linearGradient></defs></g>`,
		"fallback": "fluent-color:warning-16",
	});
}

export default Component;
