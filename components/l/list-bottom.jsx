import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/j/j8-ow0blu.css';
import '../../css/i/i381ehb9p.css';
import '../../css/y/y0qmgo4nn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="j8-ow0blu"/><path class="i381ehb9p"/><path class="y0qmgo4nn"/></g>`,
		"fallback": "icon-park-solid:list-bottom",
	});
}

export default Component;
