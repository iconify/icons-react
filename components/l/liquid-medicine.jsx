import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/ro6aibj0o.css';
import '../../css/p/pxi2r3h2s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ro6aibj0o"/><path class="pxi2r3h2s"/></g>`,
		"fallback": "healthicons:liquid-medicine",
	});
}

export default Component;
