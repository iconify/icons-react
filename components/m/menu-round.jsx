import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nv4bodb5s.css';
import '../../css/u/uoskdrb1p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nv4bodb5s"/><path clip-rule="evenodd" class="uoskdrb1p"/></g>`,
		"fallback": "gg:menu-round",
	});
}

export default Component;
