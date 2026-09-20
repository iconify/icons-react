import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w1mxj3b-m.css';
import '../../css/n/nx9y5ihpu.css';
import '../../css/d/dsakg7tne.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="w1mxj3b-m"/><path clip-rule="evenodd" class="nx9y5ihpu"/><path class="dsakg7tne"/></g>`,
		"fallback": "solar:sunset-bold",
	});
}

export default Component;
