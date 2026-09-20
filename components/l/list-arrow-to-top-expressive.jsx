import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eoomqv17x.css';
import '../../css/g/g2wmx87hc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="eoomqv17x"/><path class="g2wmx87hc"/></g>`,
		"fallback": "nrk:list-arrow-to-top-expressive",
	});
}

export default Component;
