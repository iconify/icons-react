import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u9r3bvb6y.css';
import '../../css/n/n0040-brx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="u9r3bvb6y"/><path class="n0040-brx"/></g>`,
		"fallback": "healthicons:plantation-worker",
	});
}

export default Component;
