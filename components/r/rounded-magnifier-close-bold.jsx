import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qgbkf46rn.css';
import '../../css/s/sjseyvbho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qgbkf46rn"/><path clip-rule="evenodd" class="sjseyvbho"/></g>`,
		"fallback": "solar:rounded-magnifier-close-bold",
	});
}

export default Component;
