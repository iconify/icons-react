import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vnptdin4m.css';
import '../../css/c/cwhi8dfoa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vnptdin4m"/><path clip-rule="evenodd" class="cwhi8dfoa"/></g>`,
		"fallback": "reicon:slider-h2-filled",
	});
}

export default Component;
