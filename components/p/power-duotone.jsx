import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gc192sbsk.css';
import '../../css/y/yf7rcybza.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gc192sbsk secondary"/><path class="primary yf7rcybza"/></g>`,
		"fallback": "iconaut:power-duotone",
	});
}

export default Component;
