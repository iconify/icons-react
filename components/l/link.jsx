import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/i/iplb2xdtq.css';
import '../../css/w/w85mppa_i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="iplb2xdtq"/><path class="w85mppa_i"/></g>`,
		"fallback": "doodle-icons:link",
	});
}

export default Component;
