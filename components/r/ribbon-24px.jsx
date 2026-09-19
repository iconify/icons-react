import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zjj3afb4x.css';
import '../../css/p/pts4jhbbz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="zjj3afb4x"/><path class="pts4jhbbz"/></g>`,
		"fallback": "healthicons:ribbon-24px",
	});
}

export default Component;
