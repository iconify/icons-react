import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u4jda1b4y.css';
import '../../css/c/cdl2a1bbr.css';
import '../../css/r/rqfiu97ew.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u4jda1b4y"/><path class="cdl2a1bbr"/><path clip-rule="evenodd" class="rqfiu97ew"/></g>`,
		"fallback": "solar:routing-2-outline",
	});
}

export default Component;
