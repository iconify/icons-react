import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r78vfwbww.css';
import '../../css/u/u0xkfvb4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r78vfwbww"/><path clip-rule="evenodd" class="u0xkfvb4i"/></g>`,
		"fallback": "nrk:speech-bubbles-expressive",
	});
}

export default Component;
