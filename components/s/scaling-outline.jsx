import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c4g7_1bqy.css';
import '../../css/o/od0oat-ys.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c4g7_1bqy"/><path class="od0oat-ys"/></g>`,
		"fallback": "solar:scaling-outline",
	});
}

export default Component;
