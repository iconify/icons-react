import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/ccwe3rbph.css';
import '../../css/b/bedifeq6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ccwe3rbph"/><path class="bedifeq6b"/></g>`,
		"fallback": "andrsrxn:split-vertical",
	});
}

export default Component;
