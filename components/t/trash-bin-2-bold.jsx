import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x0a6az9wl.css';
import '../../css/y/ywiahrd5b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x0a6az9wl"/><path class="ywiahrd5b"/></g>`,
		"fallback": "solar:trash-bin-2-bold",
	});
}

export default Component;
