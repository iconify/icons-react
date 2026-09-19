import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wg5d2tb9k.css';
import '../../css/h/huutsc5xq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wg5d2tb9k"/><path clip-rule="evenodd" class="huutsc5xq"/></g>`,
		"fallback": "codicon:python",
	});
}

export default Component;
