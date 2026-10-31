import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fw86-bbfx.css';
import '../../css/d/dl6v1-bdz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fw86-bbfx"/><path class="dl6v1-bdz"/></g>`,
		"fallback": "coolicons:loop-bulk-round",
	});
}

export default Component;
