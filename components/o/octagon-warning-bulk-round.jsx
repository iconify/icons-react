import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fo9rwymio.css';
import '../../css/j/j9q73968f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fo9rwymio"/><path class="j9q73968f"/></g>`,
		"fallback": "coolicons:octagon-warning-bulk-round",
	});
}

export default Component;
