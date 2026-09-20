import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sj3bn1fkn.css';
import '../../css/u/uvv_7cc4b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sj3bn1fkn"/><path class="uvv_7cc4b"/></g>`,
		"fallback": "solar:power-outline",
	});
}

export default Component;
