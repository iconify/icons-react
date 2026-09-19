import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uzyf703yp.css';
import '../../css/g/ga6-g0bxk.css';
import '../../css/k/khcn0solk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uzyf703yp"/><path class="ga6-g0bxk"/><path class="khcn0solk"/></g>`,
		"fallback": "fluent-emoji-high-contrast:shallow-pan-of-food",
	});
}

export default Component;
