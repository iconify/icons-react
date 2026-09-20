import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w97zajrjw.css';
import '../../css/g/ghzlc9bbv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="w97zajrjw"/><path class="ghzlc9bbv"/></g>`,
		"fallback": "solar:pill-bold",
	});
}

export default Component;
