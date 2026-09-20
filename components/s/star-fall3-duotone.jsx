import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/ogeusesqo.css';
import '../../css/h/h5yuz6lbz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ogeusesqo"/><path clip-rule="evenodd" class="h5yuz6lbz"/></g>`,
		"fallback": "reicon:star-fall3-duotone",
	});
}

export default Component;
