import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/ve71b7bqv.css';
import '../../css/e/ehoa_k8uf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ve71b7bqv"/><path class="ehoa_k8uf"/></g>`,
		"fallback": "coolicons:mushroom-bulk-round",
	});
}

export default Component;
