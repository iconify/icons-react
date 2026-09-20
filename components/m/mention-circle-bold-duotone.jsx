import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l80i0rb1m.css';
import '../../css/r/rdt3iubib.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l80i0rb1m"/><path clip-rule="evenodd" class="rdt3iubib"/></g>`,
		"fallback": "solar:mention-circle-bold-duotone",
	});
}

export default Component;
