import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lk2gmgbqk.css';
import '../../css/p/pr78147tx.css';
import '../../css/n/ndj259b-y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="lk2gmgbqk"/><path class="pr78147tx"/><path class="ndj259b-y"/></g>`,
		"fallback": "iconaut:square-code",
	});
}

export default Component;
