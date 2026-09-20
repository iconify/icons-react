import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gwrrgdbrw.css';
import '../../css/z/zr8q-slph.css';
import '../../css/q/q52lk8fxx.css';
import '../../css/j/j8wurj_cw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gwrrgdbrw"/><path class="zr8q-slph"/><path class="q52lk8fxx"/><path class="j8wurj_cw"/></g>`,
		"fallback": "solar:smart-home-outline",
	});
}

export default Component;
