import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kpfe4hbyi.css';
import '../../css/n/ndcw72bst.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kpfe4hbyi"/><path class="ndcw72bst"/></g>`,
		"fallback": "bi:valentine",
	});
}

export default Component;
