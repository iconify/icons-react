import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l96f4fz0s.css';
import '../../css/o/oybkrjxcb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l96f4fz0s"/><path class="oybkrjxcb"/></g>`,
		"fallback": "bi:person-video2",
	});
}

export default Component;
