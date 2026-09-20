import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fwx8lbc8q.css';
import '../../css/v/vwtwrhb4q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fwx8lbc8q"/><path clip-rule="evenodd" class="vwtwrhb4q"/></g>`,
		"fallback": "solar:smart-home-bold-duotone",
	});
}

export default Component;
