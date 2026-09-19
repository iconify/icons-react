import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/ljs94ybik.css';
import '../../css/k/kzt6bwjrq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ljs94ybik"/><path class="kzt6bwjrq"/></g>`,
		"fallback": "fluent-emoji-high-contrast:money-bag",
	});
}

export default Component;
