import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/t/tk6h_-x0n.css';
import '../../css/y/y0qmgo4nn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="tk6h_-x0n"/><path class="y0qmgo4nn"/></g>`,
		"fallback": "icon-park-outline:list-bottom",
	});
}

export default Component;
