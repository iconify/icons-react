import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q_2lwlrsw.css';
import '../../css/l/lq9h3t08h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="q_2lwlrsw"/><path class="lq9h3t08h"/></g>`,
		"fallback": "healthicons:ppe-gloves2x-outline",
	});
}

export default Component;
