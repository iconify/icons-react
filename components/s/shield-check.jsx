import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ydq7eqwzq.css';
import '../../css/t/tsbvs__7k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ydq7eqwzq"/><path class="tsbvs__7k"/></g>`,
		"fallback": "bi:shield-check",
	});
}

export default Component;
