import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t2ciy8b3b.css';
import '../../css/s/sq6m7tu0z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="t2ciy8b3b"/><path class="sq6m7tu0z"/></g>`,
		"fallback": "at-icons:mailbox",
	});
}

export default Component;
