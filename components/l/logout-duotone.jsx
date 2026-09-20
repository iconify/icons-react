import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v4tg5fbcq.css';
import '../../css/u/uqf_k_bqr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v4tg5fbcq"/><path clip-rule="evenodd" class="uqf_k_bqr"/></g>`,
		"fallback": "reicon:logout-duotone",
	});
}

export default Component;
