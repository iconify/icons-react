import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l3ad82b7b.css';
import '../../css/l/lhde36b0c.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l3ad82b7b"/><path class="lhde36b0c"/></g>`,
		"fallback": "bi:steam",
	});
}

export default Component;
