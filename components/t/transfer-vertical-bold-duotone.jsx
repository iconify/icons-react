import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/calt-4bag.css';
import '../../css/f/fkw9uzb5u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="calt-4bag"/><path class="fkw9uzb5u"/></g>`,
		"fallback": "solar:transfer-vertical-bold-duotone",
	});
}

export default Component;
