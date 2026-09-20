import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/thtrtzmjv.css';
import '../../css/r/rw5g1-bjx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="thtrtzmjv"/><path clip-rule="evenodd" class="rw5g1-bjx"/></g>`,
		"fallback": "solar:ssd-square-bold",
	});
}

export default Component;
