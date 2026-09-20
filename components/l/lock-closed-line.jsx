import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/og4_c5h-i.css';
import '../../css/d/d0-wh3buv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="og4_c5h-i"/><path class="d0-wh3buv"/></g>`,
		"fallback": "majesticons:lock-closed-line",
	});
}

export default Component;
