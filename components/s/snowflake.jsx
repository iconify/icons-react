import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/k/k09cznb4l.css';
import '../../css/s/s77ct03xo.css';
import '../../css/v/vkbm4gg9j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="k09cznb4l"/><path class="s77ct03xo"/><path class="vkbm4gg9j"/></g>`,
		"fallback": "doodle-icons:snowflake",
	});
}

export default Component;
