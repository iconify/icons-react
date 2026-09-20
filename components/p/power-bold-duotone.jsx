import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kw4ybibyr.css';
import '../../css/x/x9zqj8qqo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kw4ybibyr"/><path class="x9zqj8qqo"/></g>`,
		"fallback": "solar:power-bold-duotone",
	});
}

export default Component;
