import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g_1fylbds.css';
import '../../css/g/g2vzm7bzk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g_1fylbds"/><path class="g2vzm7bzk"/></g>`,
		"fallback": "reicon:play-add-filled",
	});
}

export default Component;
