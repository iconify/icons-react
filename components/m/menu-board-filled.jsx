import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vgxcf0b5v.css';
import '../../css/a/asi72-3dc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vgxcf0b5v"/><path class="asi72-3dc"/></g>`,
		"fallback": "reicon:menu-board-filled",
	});
}

export default Component;
