import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bj-xd4bjg.css';
import '../../css/u/u_5p40r-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bj-xd4bjg secondary"/><path class="primary u_5p40r-w"/></g>`,
		"fallback": "iconaut:rabbit-duotone",
	});
}

export default Component;
