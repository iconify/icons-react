import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v6_d3nori.css';
import '../../css/u/ugok9d7un.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v6_d3nori"/><path class="ugok9d7un"/></g>`,
		"fallback": "coolicons:paint-roller-bulk-round",
	});
}

export default Component;
