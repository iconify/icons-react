import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/r/rl_llccjx.css';
import '../../css/p/pqa2nbb_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><path class="rl_llccjx"/><path class="pqa2nbb_k"/></g>`,
		"fallback": "lets-icons:package-favourite",
	});
}

export default Component;
