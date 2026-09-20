import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f0u1q_b7m.css';
import '../../css/s/se4puabaa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f0u1q_b7m"/><path class="se4puabaa"/></g>`,
		"fallback": "reicon:notebook-square-duotone",
	});
}

export default Component;
