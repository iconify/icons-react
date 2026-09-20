import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tmqkr8aln.css';
import '../../css/x/xjllajbsa.css';
import '../../css/w/wg7rq9b7c.css';
import '../../css/e/ecna9tb0c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tmqkr8aln"/><path clip-rule="evenodd" class="xjllajbsa"/><path class="wg7rq9b7c"/><path class="ecna9tb0c"/></g>`,
		"fallback": "solar:layers-bold",
	});
}

export default Component;
