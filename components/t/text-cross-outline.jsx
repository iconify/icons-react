import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p14up0_ne.css';
import '../../css/t/tj9p9h5bc.css';
import '../../css/u/uxdowbokt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p14up0_ne"/><path class="tj9p9h5bc"/><path class="uxdowbokt"/></g>`,
		"fallback": "solar:text-cross-outline",
	});
}

export default Component;
