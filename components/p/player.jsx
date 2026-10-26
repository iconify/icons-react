import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/n/negqytxaq.css';
import '../../css/r/ru8p9tu8b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="negqytxaq"/><path class="ru8p9tu8b"/></g>`,
		"fallback": "doodle-icons:player",
	});
}

export default Component;
