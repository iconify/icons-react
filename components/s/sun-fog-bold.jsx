import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w1mxj3b-m.css';
import '../../css/c/cj9488b8p.css';
import '../../css/n/nx9y5ihpu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="w1mxj3b-m"/><path class="cj9488b8p"/><path clip-rule="evenodd" class="nx9y5ihpu"/></g>`,
		"fallback": "solar:sun-fog-bold",
	});
}

export default Component;
