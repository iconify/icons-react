import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pc5kj7d-b.css';
import '../../css/b/byxrex5tg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pc5kj7d-b"/><path class="byxrex5tg"/></g>`,
		"fallback": "at-icons:variable",
	});
}

export default Component;
