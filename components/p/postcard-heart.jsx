import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t7na-obyg.css';
import '../../css/o/odl-6rbtg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="t7na-obyg"/><path class="odl-6rbtg"/></g>`,
		"fallback": "bi:postcard-heart",
	});
}

export default Component;
