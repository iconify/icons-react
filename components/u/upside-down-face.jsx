import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/o/oi5aypbxi.css';
import '../../css/t/to1q24v3e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="oi5aypbxi"/><path class="to1q24v3e"/></g>`,
		"fallback": "icon-park-outline:upside-down-face",
	});
}

export default Component;
