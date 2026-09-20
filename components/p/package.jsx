import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kng7uibdp.css';
import '../../css/b/bk4vp5v4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kng7uibdp"/><path class="bk4vp5v4j"/></g>`,
		"fallback": "pixelarticons:package",
	});
}

export default Component;
