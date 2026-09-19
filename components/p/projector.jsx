import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r3a9rrblo.css';
import '../../css/g/g8cxpzb4j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r3a9rrblo"/><path class="g8cxpzb4j"/></g>`,
		"fallback": "at-icons:projector",
	});
}

export default Component;
