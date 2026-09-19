import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kuw9u8b9r.css';
import '../../css/p/px14t7bll.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kuw9u8b9r"/><path class="px14t7bll"/></g>`,
		"fallback": "bi:sign-stop-fill",
	});
}

export default Component;
