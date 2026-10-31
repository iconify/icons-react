import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/amcv3fb9n.css';
import '../../css/w/waezl2blu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="amcv3fb9n"/><path class="waezl2blu"/></g>`,
		"fallback": "coolicons:snail-bulk-round",
	});
}

export default Component;
