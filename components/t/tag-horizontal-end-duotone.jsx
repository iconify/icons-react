import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/ox7d0qb-k.css';
import '../../css/e/e89p18b1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ox7d0qb-k"/><path class="e89p18b1c"/></g>`,
		"fallback": "keyline-icons:tag-horizontal-end-duotone",
	});
}

export default Component;
