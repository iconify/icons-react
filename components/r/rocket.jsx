import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q6dcbeqzs.css';
import '../../css/q/q0flt88vy.css';
import '../../css/q/qtv77fehd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="q6dcbeqzs"/><path class="q0flt88vy"/><path class="qtv77fehd"/></g>`,
		"fallback": "bi:rocket",
	});
}

export default Component;
