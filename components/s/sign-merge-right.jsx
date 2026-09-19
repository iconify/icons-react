import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o6truac_g.css';
import '../../css/t/txfnowbse.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o6truac_g"/><path class="txfnowbse"/></g>`,
		"fallback": "bi:sign-merge-right",
	});
}

export default Component;
