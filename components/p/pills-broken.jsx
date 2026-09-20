import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hrkp-tbak.css';
import '../../css/v/vr39ulzpl.css';
import '../../css/h/h0g48wbnz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="hrkp-tbak"/><path class="vr39ulzpl"/><path class="h0g48wbnz"/></g>`,
		"fallback": "solar:pills-broken",
	});
}

export default Component;
