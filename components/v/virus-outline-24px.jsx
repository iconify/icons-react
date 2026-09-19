import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hia-v51nk.css';
import '../../css/b/bu7xt-low.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hia-v51nk"/><path clip-rule="evenodd" class="bu7xt-low"/></g>`,
		"fallback": "healthicons:virus-outline-24px",
	});
}

export default Component;
