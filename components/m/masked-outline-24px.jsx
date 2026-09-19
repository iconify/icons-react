import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m5ap_-bph.css';
import '../../css/d/d4bnqqaeb.css';
import '../../css/j/je--dqsdc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="m5ap_-bph"/><path class="d4bnqqaeb"/><path class="je--dqsdc"/></g>`,
		"fallback": "healthicons:masked-outline-24px",
	});
}

export default Component;
