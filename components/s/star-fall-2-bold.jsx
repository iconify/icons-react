import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kjba8yb9s.css';
import '../../css/s/swfp62bvn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kjba8yb9s"/><path class="swfp62bvn"/></g>`,
		"fallback": "solar:star-fall-2-bold",
	});
}

export default Component;
