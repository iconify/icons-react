import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ae03mbnqe.css';
import '../../css/i/i9u_4qbtv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ae03mbnqe secondary"/><path class="i9u_4qbtv primary"/></g>`,
		"fallback": "iconaut:pilcrow-left-duotone",
	});
}

export default Component;
