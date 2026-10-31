import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q3rkgq6ia.css';
import '../../css/b/b1jnfbfts.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="q3rkgq6ia"/><path class="b1jnfbfts"/></g>`,
		"fallback": "coolicons:list-unordered-bulk-round",
	});
}

export default Component;
