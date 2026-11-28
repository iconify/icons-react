import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t1jvezbis.css';
import '../../css/d/dtdu4dsza.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary t1jvezbis"/><path class="dtdu4dsza primary"/></g>`,
		"fallback": "iconaut:pager-duotone",
	});
}

export default Component;
