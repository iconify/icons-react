import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wuose96rb.css';
import '../../css/h/h6zjf-b2c.css';
import '../../css/f/fvjbswbly.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wuose96rb"/><path class="h6zjf-b2c"/><path clip-rule="evenodd" class="fvjbswbly"/></g>`,
		"fallback": "solar:safe-square-bold-duotone",
	});
}

export default Component;
