import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dmo4nnh_t.css';
import '../../css/f/fa35xcctw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dmo4nnh_t"/><path class="fa35xcctw"/></g>`,
		"fallback": "mynaui:subtract-solid",
	});
}

export default Component;
