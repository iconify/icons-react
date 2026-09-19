import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/srblqsb1p.css';
import '../../css/h/ho1k2t4lq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="srblqsb1p"/><path class="ho1k2t4lq"/></g>`,
		"fallback": "bi:mailbox",
	});
}

export default Component;
