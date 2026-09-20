import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/avycc8bur.css';
import '../../css/d/d_wmii10a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="avycc8bur"/><path class="d_wmii10a"/></g>`,
		"fallback": "solar:sort-horizontal-bold",
	});
}

export default Component;
