import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/u/u7-2f7b1n.css';
import '../../css/e/e9rv-u_7y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="u7-2f7b1n"/><path class="e9rv-u_7y"/></g>`,
		"fallback": "doodle-icons:snowman",
	});
}

export default Component;
