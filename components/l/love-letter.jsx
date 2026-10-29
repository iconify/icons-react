import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/ltypt_bur.css';
import '../../css/l/ly72_5s5b.css';
import '../../css/y/yex6b0bsc.css';
import '../../css/j/j1t9dzbtn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ltypt_bur wm-k"/><path class="ly72_5s5b wm-s"/><path class="yex6b0bsc"/><path class="j1t9dzbtn"/></g>`,
		"fallback": "withicons-bauhaus:love-letter",
	});
}

export default Component;
