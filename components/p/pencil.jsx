import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/a/aeiyobhbi.css';
import '../../css/a/a04a_c-3l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="aeiyobhbi"/><path class="a04a_c-3l"/></g>`,
		"fallback": "doodle-icons:pencil",
	});
}

export default Component;
