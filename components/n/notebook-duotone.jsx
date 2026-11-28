import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d0gx8k7cm.css';
import '../../css/x/xv6xtbb7h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d0gx8k7cm secondary"/><path class="primary xv6xtbb7h"/></g>`,
		"fallback": "iconaut:notebook-duotone",
	});
}

export default Component;
