import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pgkncaccr.css';
import '../../css/f/frb6r7bcl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pgkncaccr"/><path clip-rule="evenodd" class="frb6r7bcl"/></g>`,
		"fallback": "gg:screen-shot",
	});
}

export default Component;
