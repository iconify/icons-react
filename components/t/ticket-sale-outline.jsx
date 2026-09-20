import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s4q5tcbyx.css';
import '../../css/n/nd185z8sm.css';
import '../../css/d/d7bq5xjoc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="s4q5tcbyx"/><path class="nd185z8sm"/><path class="d7bq5xjoc"/></g>`,
		"fallback": "solar:ticket-sale-outline",
	});
}

export default Component;
