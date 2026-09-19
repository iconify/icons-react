import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uzak40gaa.css';
import '../../css/a/a_joipxfk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uzak40gaa"/><path clip-rule="evenodd" class="a_joipxfk"/></g>`,
		"fallback": "gg:notes",
	});
}

export default Component;
