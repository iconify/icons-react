import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/msq_rxoiy.css';
import '../../css/u/uuxu63bux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="msq_rxoiy secondary"/><path class="primary uuxu63bux"/></g>`,
		"fallback": "iconaut:square-split-bottom-right-duotone",
	});
}

export default Component;
