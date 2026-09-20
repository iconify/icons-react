import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gatfc8btz.css';
import '../../css/m/mtcnkkdgi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gatfc8btz"/><path clip-rule="evenodd" class="mtcnkkdgi"/></g>`,
		"fallback": "nrk:speech-bubble-line-expressive",
	});
}

export default Component;
