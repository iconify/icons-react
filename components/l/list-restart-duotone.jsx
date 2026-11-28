import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mn-sdlbty.css';
import '../../css/f/fwjt7-e1o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mn-sdlbty secondary"/><path class="fwjt7-e1o primary"/></g>`,
		"fallback": "iconaut:list-restart-duotone",
	});
}

export default Component;
