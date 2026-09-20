import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/ocr8omb0l.css';
import '../../css/z/z8u4p6b6l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ocr8omb0l"/><path class="z8u4p6b6l"/></g>`,
		"fallback": "solar:pie-chart-2-bold",
	});
}

export default Component;
