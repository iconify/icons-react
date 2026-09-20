import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p4kipac5d.css';
import '../../css/c/cnlej75nr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p4kipac5d"/><path clip-rule="evenodd" class="cnlej75nr"/></g>`,
		"fallback": "reicon:mention-square-filled",
	});
}

export default Component;
