import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vwymyza4h.css';
import '../../css/p/pq8b-w2yd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vwymyza4h"/><path class="pq8b-w2yd"/></g>`,
		"fallback": "bi:repeat-1",
	});
}

export default Component;
