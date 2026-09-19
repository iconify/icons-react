import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/a/a55cyobzk.css';
import '../../css/m/m0lx8_b_c.css';
import '../../css/r/rwqtpccge.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="a55cyobzk"/><path class="m0lx8_b_c"/><path class="rwqtpccge"/></g>`,
		"fallback": "hugeicons:menu-10",
	});
}

export default Component;
