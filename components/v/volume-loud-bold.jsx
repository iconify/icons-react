import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fp7ovzjoy.css';
import '../../css/a/avhjy34yu.css';
import '../../css/i/i_grj_bxx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fp7ovzjoy"/><path class="avhjy34yu"/><path class="i_grj_bxx"/></g>`,
		"fallback": "solar:volume-loud-bold",
	});
}

export default Component;
