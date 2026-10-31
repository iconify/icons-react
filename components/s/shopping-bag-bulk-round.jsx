import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kxb14t88r.css';
import '../../css/j/j2ocj64rv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kxb14t88r"/><path class="j2ocj64rv"/></g>`,
		"fallback": "coolicons:shopping-bag-bulk-round",
	});
}

export default Component;
