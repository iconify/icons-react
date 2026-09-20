import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uspk1ccev.css';
import '../../css/h/h2c-facco.css';
import '../../css/a/a_7-1zs-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uspk1ccev"/><path class="h2c-facco"/><path class="a_7-1zs-b"/></g>`,
		"fallback": "mynaui:user-hexagon-solid",
	});
}

export default Component;
