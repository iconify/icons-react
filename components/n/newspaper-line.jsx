import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uyamjvbkz.css';
import '../../css/p/psxwf5bgo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uyamjvbkz"/><path class="psxwf5bgo"/></g>`,
		"fallback": "majesticons:newspaper-line",
	});
}

export default Component;
