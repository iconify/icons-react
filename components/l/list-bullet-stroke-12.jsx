import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sacdn40yp.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f96l9acmb.css';
import '../../css/c/c6auvpuvc.css';
import '../../css/e/edlkufbty.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sacdn40yp"/><g class="cuyn6tgcc"><circle class="f96l9acmb"/><circle class="c6auvpuvc"/><circle class="edlkufbty"/></g>`,
		"fallback": "garden:list-bullet-stroke-12",
	});
}

export default Component;
