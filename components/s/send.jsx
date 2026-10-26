import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/k/k-c1vwgum.css';
import '../../css/s/s6aehis0e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="k-c1vwgum"/><path class="s6aehis0e"/></g>`,
		"fallback": "doodle-icons:send",
	});
}

export default Component;
