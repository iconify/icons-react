import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rk1fkb27f.css';
import '../../css/m/m-x2tj-vw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rk1fkb27f secondary"/><path class="m-x2tj-vw primary"/></g>`,
		"fallback": "iconaut:paw-duotone",
	});
}

export default Component;
