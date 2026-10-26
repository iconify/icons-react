import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/v/vd9bw5w3q.css';
import '../../css/j/jbboq_m6w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="vd9bw5w3q"/><path class="jbboq_m6w"/></g>`,
		"fallback": "doodle-icons:scissors",
	});
}

export default Component;
