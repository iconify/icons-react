import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/h/h6wabwbio.css';
import '../../css/r/rq22o0d_q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="h6wabwbio"/><path class="rq22o0d_q"/></g>`,
		"fallback": "doodle-icons:love-letter",
	});
}

export default Component;
