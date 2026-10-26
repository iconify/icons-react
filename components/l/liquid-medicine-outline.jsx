import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r9p8enugo.css';
import '../../css/w/wv3sbdery.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r9p8enugo"/><path clip-rule="evenodd" class="wv3sbdery"/></g>`,
		"fallback": "healthicons:liquid-medicine-outline",
	});
}

export default Component;
