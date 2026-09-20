import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t68koxb0s.css';
import '../../css/s/settnrb1q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="t68koxb0s"/><path class="settnrb1q"/></g>`,
		"fallback": "solar:skip-next-bold-duotone",
	});
}

export default Component;
