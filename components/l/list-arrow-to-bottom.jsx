import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kmf3tabdy.css';
import '../../css/x/x8q9c3bmh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kmf3tabdy"/><path class="x8q9c3bmh"/></g>`,
		"fallback": "nrk:list-arrow-to-bottom",
	});
}

export default Component;
