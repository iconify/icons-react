import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o3bby8bje.css';
import '../../css/k/ka7qkbcrn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o3bby8bje"/><path class="ka7qkbcrn"/></g>`,
		"fallback": "coolicons:notebook-bulk-round",
	});
}

export default Component;
