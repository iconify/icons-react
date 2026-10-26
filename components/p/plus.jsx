import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/v/vw8aa6tss.css';
import '../../css/k/ky6fbmbud.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="vw8aa6tss"/><path class="ky6fbmbud"/></g>`,
		"fallback": "doodle-icons:plus",
	});
}

export default Component;
