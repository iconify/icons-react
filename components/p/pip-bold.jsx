import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xnh1ybbye.css';
import '../../css/h/hdjk4ee2i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xnh1ybbye"/><path class="hdjk4ee2i"/></g>`,
		"fallback": "solar:pip-bold",
	});
}

export default Component;
