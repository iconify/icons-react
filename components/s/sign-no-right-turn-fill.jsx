import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vy-wb_bgu.css';
import '../../css/p/pn4usgbnc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vy-wb_bgu"/><path class="pn4usgbnc"/></g>`,
		"fallback": "bi:sign-no-right-turn-fill",
	});
}

export default Component;
