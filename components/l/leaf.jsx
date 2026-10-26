import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/h/ha978gbtd.css';
import '../../css/q/q3oymib2p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="ha978gbtd"/><path class="q3oymib2p"/></g>`,
		"fallback": "doodle-icons:leaf",
	});
}

export default Component;
