import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/om4qpc7yf.css';
import '../../css/t/tsq3s_b7n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="om4qpc7yf"/><path class="tsq3s_b7n"/></g>`,
		"fallback": "et:sad",
	});
}

export default Component;
