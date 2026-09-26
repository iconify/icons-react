import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y_my74bgw.css';
import '../../css/p/phpr41beq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="y_my74bgw"/><path class="phpr41beq"/></g>`,
		"fallback": "solar:panel-right-bold-duotone",
	});
}

export default Component;
