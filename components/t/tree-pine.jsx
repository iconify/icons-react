import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/n/ns8zonbir.css';
import '../../css/q/qo5667fmu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="ns8zonbir"/><path class="qo5667fmu"/></g>`,
		"fallback": "doodle-icons:tree-pine",
	});
}

export default Component;
