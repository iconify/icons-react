import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/ndr917b-r.css';
import '../../css/j/jaodq9qcv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ndr917b-r"/><path clip-rule="evenodd" class="jaodq9qcv"/></g>`,
		"fallback": "solar:star-ring-bold",
	});
}

export default Component;
