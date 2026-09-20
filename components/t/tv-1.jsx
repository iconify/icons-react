import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u6dq02bsp.css';
import '../../css/p/pamik0bau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u6dq02bsp"/><path class="pamik0bau"/></g>`,
		"fallback": "tdesign:tv-1",
	});
}

export default Component;
