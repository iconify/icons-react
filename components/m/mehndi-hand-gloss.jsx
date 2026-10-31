import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/ca_1t-bvy.css';
import '../../css/x/x-_6wtbjc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="ca_1t-bvy wm-k"/><path class="wm-a x-_6wtbjc"/></g>`,
		"fallback": "withicons:mehndi-hand-gloss",
	});
}

export default Component;
