import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w66e6qboz.css';
import '../../css/g/g5i7-kdnk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="w66e6qboz"/><path class="g5i7-kdnk"/></g>`,
		"fallback": "coolicons:network-bulk-round",
	});
}

export default Component;
