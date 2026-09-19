import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e3isnccoy.css';
import '../../css/s/sbxdzebnn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="e3isnccoy"/><path clip-rule="evenodd" class="sbxdzebnn"/></g>`,
		"fallback": "healthicons:tissue-outline-24px",
	});
}

export default Component;
