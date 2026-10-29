import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/w1hie5dyf.css';
import '../../css/z/zak1u-b3y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="w1hie5dyf"/><path class="wm-a zak1u-b3y"/></g>`,
		"fallback": "withicons:variable",
	});
}

export default Component;
