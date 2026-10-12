import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xywdqfbfw.css';
import '../../css/w/wmfwlabqo.css';
import '../../css/h/hrs6edb5n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xywdqfbfw"/><path class="wmfwlabqo"/><path class="hrs6edb5n"/>`,
		"fallback": "energy-icons:torque-wrench-48",
	});
}

export default Component;
