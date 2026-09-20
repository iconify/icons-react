import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uqf_k_bqr.css';
import '../../css/t/t584pcciy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="uqf_k_bqr"/><path class="t584pcciy"/></g>`,
		"fallback": "reicon:logout-filled",
	});
}

export default Component;
