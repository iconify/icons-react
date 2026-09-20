import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qt2qrzifr.css';
import '../../css/b/by49p9gor.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="qt2qrzifr"/><path class="by49p9gor"/></g>`,
		"fallback": "solar:pie-chart-bold-duotone",
	});
}

export default Component;
