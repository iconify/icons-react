import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/tg_u_rvde.css';
import '../../css/j/jlcd2ebos.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="tg_u_rvde"/><path class="jlcd2ebos"/></g>`,
		"fallback": "withicons-retro:rangoli-pattern",
	});
}

export default Component;
