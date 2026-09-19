import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qn84tgm0q.css';
import '../../css/p/ptqrsn5-d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qn84tgm0q"/><path class="ptqrsn5-d"/></g>`,
		"fallback": "fluent-emoji-high-contrast:orangutan",
	});
}

export default Component;
