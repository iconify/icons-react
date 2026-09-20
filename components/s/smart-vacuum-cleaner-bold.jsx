import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c07eu3b7m.css';
import '../../css/u/u7e-2iblc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c07eu3b7m"/><path clip-rule="evenodd" class="u7e-2iblc"/></g>`,
		"fallback": "solar:smart-vacuum-cleaner-bold",
	});
}

export default Component;
