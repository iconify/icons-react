import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/p/p71ausbip.css';
import '../../css/x/x48i99bgh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="p71ausbip"/><path class="x48i99bgh"/></g>`,
		"fallback": "doodle-icons:thumbs-up",
	});
}

export default Component;
