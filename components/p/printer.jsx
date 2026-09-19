import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wsrqvfb2c.css';
import '../../css/e/e4xjy6s1t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wsrqvfb2c"/><path class="e4xjy6s1t"/></g>`,
		"fallback": "bi:printer",
	});
}

export default Component;
