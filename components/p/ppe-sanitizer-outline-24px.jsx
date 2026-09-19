import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nq92p2o2x.css';
import '../../css/y/y1qiu57ii.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nq92p2o2x"/><path clip-rule="evenodd" class="y1qiu57ii"/></g>`,
		"fallback": "healthicons:ppe-sanitizer-outline-24px",
	});
}

export default Component;
