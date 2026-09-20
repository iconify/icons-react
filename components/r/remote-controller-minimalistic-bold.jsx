import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u-zqos_se.css';
import '../../css/j/jz220-blj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u-zqos_se"/><path clip-rule="evenodd" class="jz220-blj"/></g>`,
		"fallback": "solar:remote-controller-minimalistic-bold",
	});
}

export default Component;
