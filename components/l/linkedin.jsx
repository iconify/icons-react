import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t-cobybec.css';
import '../../css/q/q12e4xb1q.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="t-cobybec"/><path class="q12e4xb1q"/></g>`,
		"fallback": "et:linkedin",
	});
}

export default Component;
