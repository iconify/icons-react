import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jk52mabae.css';
import '../../css/n/ndsqcqpll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="jk52mabae"/><path class="ndsqcqpll"/></g>`,
		"fallback": "healthicons:respirator-24px",
	});
}

export default Component;
