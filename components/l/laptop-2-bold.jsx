import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wiiyr81vc.css';
import '../../css/t/takok1bwd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wiiyr81vc"/><path class="takok1bwd"/></g>`,
		"fallback": "solar:laptop-2-bold",
	});
}

export default Component;
