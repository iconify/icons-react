import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/y/ye2de0rpg.css';
import '../../css/t/t3p6ajbsy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="ye2de0rpg"/><path class="t3p6ajbsy"/></g>`,
		"fallback": "icon-park-outline:usb",
	});
}

export default Component;
