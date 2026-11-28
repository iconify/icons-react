import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jteii8j9k.css';
import '../../css/t/tq91zub7h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jteii8j9k secondary"/><path class="primary tq91zub7h"/></g>`,
		"fallback": "iconaut:layout-grid-duotone",
	});
}

export default Component;
