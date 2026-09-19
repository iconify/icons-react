import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/dbw90fvbo.css';
import '../../css/s/sh5rk8b1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="dbw90fvbo"/><path class="sh5rk8b1z"/></g>`,
		"fallback": "hugeicons:layout-04",
	});
}

export default Component;
