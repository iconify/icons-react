import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kjis_zi_c.css';
import '../../css/y/ysqkblx3k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kjis_zi_c"/><path class="ysqkblx3k"/></g>`,
		"fallback": "reicon:wallet2-filled",
	});
}

export default Component;
