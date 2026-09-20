import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j_a9x6ecb.css';
import '../../css/h/hamfrcbny.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j_a9x6ecb"/><path class="hamfrcbny"/></g>`,
		"fallback": "reicon:keyboard-duotone",
	});
}

export default Component;
