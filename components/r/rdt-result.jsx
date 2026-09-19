import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lqsq9onaa.css';
import '../../css/u/up8rx9bjm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lqsq9onaa"/><path clip-rule="evenodd" class="up8rx9bjm"/></g>`,
		"fallback": "healthicons:rdt-result",
	});
}

export default Component;
