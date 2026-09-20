import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/chjn_i6rt.css';
import '../../css/c/czv0ewbne.css';
import '../../css/g/g8k88bb_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="chjn_i6rt"/><path class="czv0ewbne"/><path class="g8k88bb_r"/></g>`,
		"fallback": "solar:stars-minimalistic-bold",
	});
}

export default Component;
