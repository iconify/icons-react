import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/t/t7c033bqn.css';
import '../../css/y/yva1_1fly.css';
import '../../css/u/u8_q54bsb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="t7c033bqn"/><path class="yva1_1fly"/><path class="u8_q54bsb"/></g>`,
		"fallback": "keyline-icons:temperature-high-sharp-duotone",
	});
}

export default Component;
