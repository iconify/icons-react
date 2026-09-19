import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tmk9cn_7x.css';
import '../../css/s/scv6uz3ls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tmk9cn_7x"/><path class="scv6uz3ls"/></g>`,
		"fallback": "gg:link",
	});
}

export default Component;
