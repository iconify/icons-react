import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/q/q7v6fcbws.css';
import '../../css/o/ol8-t4idr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="q7v6fcbws"/><path class="ol8-t4idr"/></g>`,
		"fallback": "doodle-icons:tablet",
	});
}

export default Component;
