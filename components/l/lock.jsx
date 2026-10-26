import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/i/ivqxe_byo.css';
import '../../css/u/uhn9h5jxa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="ivqxe_byo"/><path class="uhn9h5jxa"/></g>`,
		"fallback": "doodle-icons:lock",
	});
}

export default Component;
