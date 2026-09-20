import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tqyo9vbbc.css';
import '../../css/z/zmw5qvb9w.css';
import '../../css/c/czr0hc_1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tqyo9vbbc"/><path clip-rule="evenodd" class="zmw5qvb9w"/><path class="czr0hc_1l"/></g>`,
		"fallback": "reicon:tuning3",
	});
}

export default Component;
