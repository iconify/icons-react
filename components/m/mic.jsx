import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m-hibnbyq.css';
import '../../css/s/s_j238b6q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="m-hibnbyq"/><path class="s_j238b6q"/></g>`,
		"fallback": "bi:mic",
	});
}

export default Component;
