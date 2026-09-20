import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/ow0r4_bzg.css';
import '../../css/z/z8lsfuh3d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ow0r4_bzg"/><path class="z8lsfuh3d"/></g>`,
		"fallback": "solar:question-mark-outline",
	});
}

export default Component;
