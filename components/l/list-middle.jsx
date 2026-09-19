import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/q/q948avbdh.css';
import '../../css/y/y0qmgo4nn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="q948avbdh"/><path class="y0qmgo4nn"/></g>`,
		"fallback": "icon-park-outline:list-middle",
	});
}

export default Component;
