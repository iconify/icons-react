import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bg5o4mi5f.css';
import '../../css/l/l1__ngnos.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bg5o4mi5f secondary"/><path class="l1__ngnos primary"/></g>`,
		"fallback": "iconaut:monitor-cog-duotone",
	});
}

export default Component;
