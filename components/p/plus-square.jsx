import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k-gih8m5c.css';
import '../../css/r/rxkwjr03s.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="k-gih8m5c"/><path class="rxkwjr03s"/></g>`,
		"fallback": "bi:plus-square",
	});
}

export default Component;
