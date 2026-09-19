import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/htdgk3bkf.css';
import '../../css/v/vmgx9rbro.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="htdgk3bkf"/><path clip-rule="evenodd" class="vmgx9rbro"/></g>`,
		"fallback": "griddy-icons:seat-reclining",
	});
}

export default Component;
