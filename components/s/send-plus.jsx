import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/ktszzubwe.css';
import '../../css/j/j_udulbub.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ktszzubwe"/><path class="j_udulbub"/></g>`,
		"fallback": "bi:send-plus",
	});
}

export default Component;
