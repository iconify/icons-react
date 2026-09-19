import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/o/otca8wbpp.css';
import '../../css/w/w-bu9e3ii.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><rect class="otca8wbpp"/><path class="w-bu9e3ii"/></g>`,
		"fallback": "icon-park-outline:transaction-order",
	});
}

export default Component;
