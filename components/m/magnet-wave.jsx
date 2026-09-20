import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uxxoswb8s.css';
import '../../css/i/i0e6x0lqf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="uxxoswb8s"/><path class="i0e6x0lqf"/></g>`,
		"fallback": "reicon:magnet-wave",
	});
}

export default Component;
