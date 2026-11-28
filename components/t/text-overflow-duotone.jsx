import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pq8m5ccti.css';
import '../../css/k/kl5l34bnb.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pq8m5ccti"/><path class="kl5l34bnb"/></g>`,
		"fallback": "pullo:text-overflow-duotone",
	});
}

export default Component;
