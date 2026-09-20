import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q14fwud4s.css';
import '../../css/k/klbrffm3t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="q14fwud4s"/><path class="klbrffm3t"/></g>`,
		"fallback": "solar:smart-speaker-minimalistic-bold-duotone",
	});
}

export default Component;
