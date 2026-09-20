import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ili-5_b1z.css';
import '../../css/d/d_chcnbrk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ili-5_b1z"/><path class="d_chcnbrk"/></g>`,
		"fallback": "reicon:trash4-duotone",
	});
}

export default Component;
