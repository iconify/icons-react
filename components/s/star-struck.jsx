import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/ki_umq5cn.css';
import '../../css/d/d-6_hfbga.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ki_umq5cn"/><path class="d-6_hfbga"/></g>`,
		"fallback": "fluent-emoji-high-contrast:star-struck",
	});
}

export default Component;
