import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xn65p_m1f.css';
import '../../css/v/vqq0u1buh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xn65p_m1f"/><path class="vqq0u1buh"/></g>`,
		"fallback": "coolicons:network-duotone-round",
	});
}

export default Component;
