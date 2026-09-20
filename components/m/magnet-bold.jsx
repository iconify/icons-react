import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u6ujfib6g.css';
import '../../css/l/la5t6nb-e.css';
import '../../css/t/tt7e65bxw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u6ujfib6g"/><path class="la5t6nb-e"/><path class="tt7e65bxw"/></g>`,
		"fallback": "solar:magnet-bold",
	});
}

export default Component;
