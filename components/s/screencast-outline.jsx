import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t49pxwgna.css';
import '../../css/d/dc-k-0ubs.css';
import '../../css/g/g32qo-u5u.css';
import '../../css/g/gdw6uxb-m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="t49pxwgna"/><path class="dc-k-0ubs"/><path class="g32qo-u5u"/><path class="gdw6uxb-m"/></g>`,
		"fallback": "solar:screencast-outline",
	});
}

export default Component;
