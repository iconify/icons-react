import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u40pfubrp.css';
import '../../css/m/ma-oqebnh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u40pfubrp"/><path clip-rule="evenodd" class="ma-oqebnh"/></g>`,
		"fallback": "solar:minimalistic-magnifier-zoom-in-bold",
	});
}

export default Component;
