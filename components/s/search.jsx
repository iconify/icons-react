import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/h/h0ugno76y.css';
import '../../css/x/xfulg0g6i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="h0ugno76y"/><path class="xfulg0g6i"/></g>`,
		"fallback": "icon-park-outline:search",
	});
}

export default Component;
