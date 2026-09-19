import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/e/ex4iv0b5o.css';
import '../../css/b/bjqrrbbpt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="ex4iv0b5o"/><path class="bjqrrbbpt"/></g>`,
		"fallback": "icon-park-outline:log",
	});
}

export default Component;
