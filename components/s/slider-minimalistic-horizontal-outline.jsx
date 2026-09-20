import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/algz9sbaz.css';
import '../../css/u/u334qkbzc.css';
import '../../css/b/bve6fnunb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="algz9sbaz"/><path clip-rule="evenodd" class="u334qkbzc"/><path class="bve6fnunb"/></g>`,
		"fallback": "solar:slider-minimalistic-horizontal-outline",
	});
}

export default Component;
