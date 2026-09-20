import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g66y3d4ub.css';
import '../../css/e/exab0-brj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="g66y3d4ub"/><path class="exab0-brj"/></g>`,
		"fallback": "solar:rewind-back-bold-duotone",
	});
}

export default Component;
