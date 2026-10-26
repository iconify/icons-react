import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/u/uz1q-vz7d.css';
import '../../css/p/ph4u_qbyi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="uz1q-vz7d"/><path class="ph4u_qbyi"/></g>`,
		"fallback": "doodle-icons:share",
	});
}

export default Component;
