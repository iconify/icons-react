import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/q31ynxbic.css';
import '../../css/g/gm04g_b8c.css';
import '../../css/d/ds2ci9blu.css';
import '../../css/x/xpn4xccyr.css';
import '../../css/t/t4euwlpjt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="q31ynxbic"/><path class="gm04g_b8c"/><path class="ds2ci9blu"/><path class="xpn4xccyr"/><path class="t4euwlpjt"/></g>`,
		"fallback": "solar:rocket-2-broken",
	});
}

export default Component;
