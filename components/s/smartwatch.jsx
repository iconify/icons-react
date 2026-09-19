import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c1-rf78se.css';
import '../../css/l/l5_xm646v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c1-rf78se"/><path class="l5_xm646v"/></g>`,
		"fallback": "bi:smartwatch",
	});
}

export default Component;
