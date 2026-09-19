import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/l/l8gev8bxx.css';
import '../../css/v/v8_9z7bdz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="l8gev8bxx"/><path class="v8_9z7bdz"/></g>`,
		"fallback": "icon-park-outline:topic",
	});
}

export default Component;
