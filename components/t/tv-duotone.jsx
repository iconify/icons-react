import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p_xoypbbt.css';
import '../../css/o/odu7g4t5k.css';
import '../../css/j/j8em_-b0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="p_xoypbbt"/><path class="odu7g4t5k"/><path class="j8em_-b0k"/></g>`,
		"fallback": "reicon:tv-duotone",
	});
}

export default Component;
