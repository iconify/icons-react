import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kimwlib-x.css';
import '../../css/u/uoskdrb1p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kimwlib-x"/><path clip-rule="evenodd" class="uoskdrb1p"/></g>`,
		"fallback": "healthicons:pill-1-outline-24px",
	});
}

export default Component;
