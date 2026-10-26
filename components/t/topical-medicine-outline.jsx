import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/elxxvlb9h.css';
import '../../css/b/bgh1dyb_s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="elxxvlb9h"/><path clip-rule="evenodd" class="bgh1dyb_s"/></g>`,
		"fallback": "healthicons:topical-medicine-outline",
	});
}

export default Component;
