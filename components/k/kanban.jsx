import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ibdtwt8tg.css';
import '../../css/c/c61le6wqg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ibdtwt8tg"/><path class="c61le6wqg"/></g>`,
		"fallback": "bi:kanban",
	});
}

export default Component;
