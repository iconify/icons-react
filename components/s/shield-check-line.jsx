import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x-lv-bc9w.css';
import '../../css/b/blb4e_b3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x-lv-bc9w"/><path class="blb4e_b3b"/></g>`,
		"fallback": "majesticons:shield-check-line",
	});
}

export default Component;
