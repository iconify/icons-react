import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/u/uytkz7noj.css';
import '../../css/h/hkrtyxbtp.css';
import '../../css/k/kgil5daom.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="uytkz7noj"/><path class="hkrtyxbtp"/><path class="kgil5daom"/></g>`,
		"fallback": "doodle-icons:turkey",
	});
}

export default Component;
