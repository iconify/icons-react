import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zi3oj6bfl.css';
import '../../css/q/q1w9wfbks.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zi3oj6bfl"/><path class="q1w9wfbks"/></g>`,
		"fallback": "nrk:square-and-arrow-up",
	});
}

export default Component;
