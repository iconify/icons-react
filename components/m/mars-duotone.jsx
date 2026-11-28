import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nygn3lboj.css';
import '../../css/h/h_-syobwo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nygn3lboj secondary"/><path class="h_-syobwo primary"/></g>`,
		"fallback": "iconaut:mars-duotone",
	});
}

export default Component;
