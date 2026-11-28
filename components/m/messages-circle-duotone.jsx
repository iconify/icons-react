import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/ryhjoibut.css';
import '../../css/p/p4lomi90a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ryhjoibut secondary"/><path class="p4lomi90a primary"/></g>`,
		"fallback": "iconaut:messages-circle-duotone",
	});
}

export default Component;
