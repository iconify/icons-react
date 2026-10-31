import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fo9rwymio.css';
import '../../css/u/uloqrgb0d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fo9rwymio"/><path class="uloqrgb0d"/></g>`,
		"fallback": "coolicons:octagon-close-bulk-round",
	});
}

export default Component;
