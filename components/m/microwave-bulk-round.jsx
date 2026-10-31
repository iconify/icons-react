import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/biwhojbir.css';
import '../../css/t/tqvc0acot.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="biwhojbir"/><path class="tqvc0acot"/></g>`,
		"fallback": "coolicons:microwave-bulk-round",
	});
}

export default Component;
