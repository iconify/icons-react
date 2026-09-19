import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lo-104boj.css';
import '../../css/a/amdf2k30j.css';
import '../../css/q/qt50d49vp.css';
import '../../css/p/p6fs5dave.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lo-104boj"/><path class="amdf2k30j"/><path clip-rule="evenodd" class="qt50d49vp"/><path class="p6fs5dave"/></g>`,
		"fallback": "healthicons:smoking-outline",
	});
}

export default Component;
