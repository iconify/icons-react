import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hpq3jh5iu.css';
import '../../css/u/uuaa3pxhc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hpq3jh5iu secondary"/><path class="primary uuaa3pxhc"/></g>`,
		"fallback": "iconaut:timer-duotone",
	});
}

export default Component;
