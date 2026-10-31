import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/ww9_l4_vw.css';
import '../../css/o/o-u2efu9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ww9_l4_vw"/><path class="o-u2efu9j"/></g>`,
		"fallback": "coolicons:note-edit-bulk-round",
	});
}

export default Component;
