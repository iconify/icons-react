import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a-3r6172q.css';
import '../../css/q/qma8y03uw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a-3r6172q"/><path clip-rule="evenodd" class="qma8y03uw"/></g>`,
		"fallback": "solar:logout-bold-duotone",
	});
}

export default Component;
