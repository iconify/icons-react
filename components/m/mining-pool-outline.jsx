import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/xjiy7pbud.css';
import '../../css/q/qpkpssblg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="xjiy7pbud"/><path class="qpkpssblg"/></g>`,
		"fallback": "bitcoin-icons:mining-pool-outline",
	});
}

export default Component;
