import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nn0g1lbrm.css';
import '../../css/e/edqtbj3ff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nn0g1lbrm secondary"/><path class="edqtbj3ff primary"/></g>`,
		"fallback": "iconaut:message-square-sparkles-duotone",
	});
}

export default Component;
