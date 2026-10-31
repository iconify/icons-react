import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t3_1khbcx.css';
import '../../css/m/mn8lg7bpx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="t3_1khbcx"/><path class="mn8lg7bpx"/></g>`,
		"fallback": "coolicons:lasso-bulk-round",
	});
}

export default Component;
