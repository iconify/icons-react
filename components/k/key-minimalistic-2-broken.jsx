import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/t6vc3pwwm.css';
import '../../css/p/px5xiwqdn.css';
import '../../css/u/ux2n7ervq.css';
import '../../css/j/jlbwv3bdp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="t6vc3pwwm"/><circle class="px5xiwqdn"/><path class="ux2n7ervq"/><path class="jlbwv3bdp"/></g>`,
		"fallback": "solar:key-minimalistic-2-broken",
	});
}

export default Component;
