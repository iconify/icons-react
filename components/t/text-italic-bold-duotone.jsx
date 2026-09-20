import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qms7bzbzl.css';
import '../../css/k/kn8_x8qxk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="qms7bzbzl"/><path class="kn8_x8qxk"/></g>`,
		"fallback": "solar:text-italic-bold-duotone",
	});
}

export default Component;
