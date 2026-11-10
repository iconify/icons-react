import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sw-q21bhh.css';
import '../../css/e/ekdvwacpp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sw-q21bhh"/><path class="ekdvwacpp"/></g>`,
		"fallback": "andrsrxn:square-divide-horizontal",
	});
}

export default Component;
