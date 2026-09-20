import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jp0mtlroy.css';
import '../../css/g/g_1fylbds.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jp0mtlroy"/><path class="g_1fylbds"/></g>`,
		"fallback": "reicon:play-remove-filled",
	});
}

export default Component;
