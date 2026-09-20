import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kxhp7jbss.css';
import '../../css/u/ujc73kb6q.css';
import '../../css/m/m9i-7nbso.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="kxhp7jbss"/><path class="ujc73kb6q"/><path class="m9i-7nbso"/></g>`,
		"fallback": "solar:suitcase-lines-bold",
	});
}

export default Component;
