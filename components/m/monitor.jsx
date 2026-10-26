import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/t/thbe18u9p.css';
import '../../css/u/u7sn-mbbu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="thbe18u9p"/><path class="u7sn-mbbu"/></g>`,
		"fallback": "doodle-icons:monitor",
	});
}

export default Component;
