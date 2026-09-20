import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/w/wndlmq54d.css';
import '../../css/e/ex-l8ubxs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="wndlmq54d"/><path class="ex-l8ubxs"/></g>`,
		"fallback": "streamline-plump-color:panoramic-screen",
	});
}

export default Component;
