import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/v/vpwrufh5w.css';
import '../../css/q/qx12gmrax.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="vpwrufh5w"/><path class="qx12gmrax"/></g>`,
		"fallback": "doodle-icons:maple-leaf",
	});
}

export default Component;
