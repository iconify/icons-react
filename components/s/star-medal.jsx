import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/t/t4s1tlbgn.css';
import '../../css/p/p04r9vt4m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="t4s1tlbgn"/><path class="p04r9vt4m"/></g>`,
		"fallback": "doodle-icons:star-medal",
	});
}

export default Component;
