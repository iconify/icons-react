import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pozb7l72w.css';
import '../../css/y/y6efb-9ur.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pozb7l72w"/><path class="y6efb-9ur"/></g>`,
		"fallback": "pixelarticons:t-arrow-up",
	});
}

export default Component;
