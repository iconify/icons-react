import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fin-xjjjc.css';
import '../../css/m/m_ycx9e0j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fin-xjjjc"/><path class="m_ycx9e0j"/></g>`,
		"fallback": "coolicons:owl-head-bulk-round",
	});
}

export default Component;
