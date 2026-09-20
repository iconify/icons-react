import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pxps3cn4b.css';
import '../../css/i/i5itnkbdo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="pxps3cn4b"/><path class="i5itnkbdo"/></g>`,
		"fallback": "solar:rounded-magnifier-bold",
	});
}

export default Component;
