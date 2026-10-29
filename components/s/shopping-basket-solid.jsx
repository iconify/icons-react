import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/ndx2w-b8b.css';
import '../../css/f/f4pdlxb1q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="ndx2w-b8b"/><path class="f4pdlxb1q wm-a"/></g>`,
		"fallback": "withicons:shopping-basket-solid",
	});
}

export default Component;
