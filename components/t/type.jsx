import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/b/bbyxemx7m.css';
import '../../css/s/sarreobqx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="bbyxemx7m"/><path class="sarreobqx"/></g>`,
		"fallback": "doodle-icons:type",
	});
}

export default Component;
