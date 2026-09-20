import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v-qktcblh.css';
import '../../css/g/g87galbzg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v-qktcblh"/><path class="g87galbzg"/></g>`,
		"fallback": "pixelarticons:redo",
	});
}

export default Component;
