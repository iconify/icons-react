import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xnh1ybbye.css';
import '../../css/c/cxs5opefl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xnh1ybbye"/><path class="cxs5opefl"/></g>`,
		"fallback": "solar:pip-bold-duotone",
	});
}

export default Component;
