import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v-_dlh6tc.css';
import '../../css/l/lhjru-bxh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="v-_dlh6tc"/><path class="lhjru-bxh"/></g>`,
		"fallback": "solar:star-off-outline",
	});
}

export default Component;
