import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t9olzccxi.css';
import '../../css/i/ihikr6b_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary t9olzccxi"/><path class="ihikr6b_e primary"/></g>`,
		"fallback": "iconaut:skip-back-duotone",
	});
}

export default Component;
