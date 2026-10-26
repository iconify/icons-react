import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/h/h6wabwbio.css';
import '../../css/o/osvhr9e0u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="h6wabwbio"/><path class="osvhr9e0u"/></g>`,
		"fallback": "doodle-icons:mail",
	});
}

export default Component;
