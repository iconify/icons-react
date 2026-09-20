import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q6r-1438e.css';
import '../../css/c/c8k32vnzj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="q6r-1438e"/><path clip-rule="evenodd" class="c8k32vnzj"/></g>`,
		"fallback": "solar:multiple-forward-right-bold-duotone",
	});
}

export default Component;
