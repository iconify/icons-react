import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/cr2yfmb-d.css';
import '../../css/v/v1e243b6t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="cr2yfmb-d"/><path class="v1e243b6t wm-s"/></g>`,
		"fallback": "withicons:notebook-pen-solid",
	});
}

export default Component;
