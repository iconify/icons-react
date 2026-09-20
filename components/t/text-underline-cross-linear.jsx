import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pw8f5c0fp.css';
import '../../css/y/yothtr4_z.css';
import '../../css/k/kp_4ybcux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="pw8f5c0fp"/><path class="yothtr4_z"/><path class="kp_4ybcux"/></g>`,
		"fallback": "solar:text-underline-cross-linear",
	});
}

export default Component;
