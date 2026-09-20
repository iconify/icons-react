import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/exnigt0cp.css';
import '../../css/f/fsencyb4p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="exnigt0cp"/><path clip-rule="evenodd" class="fsencyb4p"/></g>`,
		"fallback": "reicon:walk2-filled",
	});
}

export default Component;
