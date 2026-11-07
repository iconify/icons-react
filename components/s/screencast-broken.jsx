import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mnp-46y7d.css';
import '../../css/v/v4tckp_mx.css';
import '../../css/d/dxz_62g8x.css';
import '../../css/u/uzj9wplpi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="mnp-46y7d"/><path class="v4tckp_mx"/><path class="dxz_62g8x"/><path class="uzj9wplpi"/></g>`,
		"fallback": "solar:screencast-broken",
	});
}

export default Component;
