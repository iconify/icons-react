import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/erdanuqul.css';
import '../../css/x/xahc2ub6x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="erdanuqul"/><path clip-rule="evenodd" class="xahc2ub6x"/></g>`,
		"fallback": "reicon:kaaba-filled",
	});
}

export default Component;
