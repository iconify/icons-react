import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jzuu9f1qr.css';
import '../../css/k/kcp3fubav.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="jzuu9f1qr"/><path class="kcp3fubav"/></g>`,
		"fallback": "nrk:pencil-line",
	});
}

export default Component;
