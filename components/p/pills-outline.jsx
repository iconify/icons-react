import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vn-4oacnh.css';
import '../../css/e/ep9et47iv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vn-4oacnh"/><path clip-rule="evenodd" class="ep9et47iv"/></g>`,
		"fallback": "solar:pills-outline",
	});
}

export default Component;
