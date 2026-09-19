import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uh1g6cz1h.css';
import '../../css/n/n8mw7qbiz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uh1g6cz1h"/><path clip-rule="evenodd" class="n8mw7qbiz"/></g>`,
		"fallback": "healthicons:ppe-mask-outline-24px",
	});
}

export default Component;
