import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qhausbzkm.css';
import '../../css/u/u1-we1u_o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qhausbzkm"/><path class="u1-we1u_o"/></g>`,
		"fallback": "heroicons:phone-arrow-up-right-16-solid",
	});
}

export default Component;
