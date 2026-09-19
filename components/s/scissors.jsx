import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o3kywkbui.css';
import '../../css/w/w05e6sayd.css';
import '../../css/j/j-woxn_pq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="o3kywkbui"/><path class="w05e6sayd"/><path class="j-woxn_pq"/></g>`,
		"fallback": "pepicons:scissors",
	});
}

export default Component;
