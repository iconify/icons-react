import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u6dq02bsp.css';
import '../../css/w/wj0t3kthl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u6dq02bsp"/><path class="wj0t3kthl"/></g>`,
		"fallback": "tdesign:tv-2",
	});
}

export default Component;
