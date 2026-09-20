import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rhorp5vwr.css';
import '../../css/d/d6uogubqg.css';
import '../../css/v/vi49wmb_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="rhorp5vwr"/><path class="d6uogubqg"/><path class="vi49wmb_q"/></g>`,
		"fallback": "solar:magnet-wave-outline",
	});
}

export default Component;
