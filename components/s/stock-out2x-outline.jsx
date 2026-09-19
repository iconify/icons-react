import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wktgryb-m.css';
import '../../css/u/uy9n4bczz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wktgryb-m"/><path clip-rule="evenodd" class="uy9n4bczz"/></g>`,
		"fallback": "healthicons:stock-out2x-outline",
	});
}

export default Component;
