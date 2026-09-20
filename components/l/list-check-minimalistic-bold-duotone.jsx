import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q6n3gmbls.css';
import '../../css/j/joufq4okl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="q6n3gmbls"/><path class="joufq4okl"/></g>`,
		"fallback": "solar:list-check-minimalistic-bold-duotone",
	});
}

export default Component;
