import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/akw22x2pq.css';
import '../../css/r/r647m5gqz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="akw22x2pq secondary"/><path class="primary r647m5gqz"/></g>`,
		"fallback": "iconaut:spell-check-duotone",
	});
}

export default Component;
