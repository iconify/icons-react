import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q-c7igb6q.css';
import '../../css/p/pieii1b8k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="q-c7igb6q"/><path class="pieii1b8k"/></g>`,
		"fallback": "healthicons:odontology-implant2x-outline",
	});
}

export default Component;
