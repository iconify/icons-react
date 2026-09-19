import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fy54mwbql.css';
import '../../css/s/sjurs-bqo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fy54mwbql"/><path class="sjurs-bqo"/></g>`,
		"fallback": "gg:move-up",
	});
}

export default Component;
