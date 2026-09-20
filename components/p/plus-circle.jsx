import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bi5jh9b8q.css';
import '../../css/h/h4jbu3mjw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bi5jh9b8q"/><path class="h4jbu3mjw"/></g>`,
		"fallback": "rivet-icons:plus-circle",
	});
}

export default Component;
