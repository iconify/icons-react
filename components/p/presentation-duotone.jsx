import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u7yvd1jdo.css';
import '../../css/p/p-5uvsb-z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary u7yvd1jdo"/><path class="p-5uvsb-z primary"/></g>`,
		"fallback": "iconaut:presentation-duotone",
	});
}

export default Component;
