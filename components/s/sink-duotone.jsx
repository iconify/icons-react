import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tl1iocclc.css';
import '../../css/i/iw-g_jb9g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary tl1iocclc"/><path class="iw-g_jb9g primary"/></g>`,
		"fallback": "iconaut:sink-duotone",
	});
}

export default Component;
