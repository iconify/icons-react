import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rv-q_xbaz.css';
import '../../css/m/muomn10ds.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rv-q_xbaz secondary"/><path class="muomn10ds primary"/></g>`,
		"fallback": "iconaut:tablet-duotone",
	});
}

export default Component;
