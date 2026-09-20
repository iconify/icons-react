import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y1bi4h1zy.css';
import '../../css/c/czur__b9n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="y1bi4h1zy"/><path clip-rule="evenodd" class="czur__b9n"/></g>`,
		"fallback": "solar:running-2-bold",
	});
}

export default Component;
