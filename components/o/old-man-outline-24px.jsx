import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vpv62rbtq.css';
import '../../css/f/fy49u-boj.css';
import '../../css/e/e_3jt1rft.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vpv62rbtq"/><path clip-rule="evenodd" class="fy49u-boj"/><path class="e_3jt1rft"/></g>`,
		"fallback": "healthicons:old-man-outline-24px",
	});
}

export default Component;
