import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uh9jvoi_j.css';
import '../../css/u/udtdetrej.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uh9jvoi_j"/><path class="udtdetrej"/></g>`,
		"fallback": "at-icons:mobile-phone",
	});
}

export default Component;
