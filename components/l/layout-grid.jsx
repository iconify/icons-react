import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/d/d19mzcbcn.css';
import '../../css/v/vna8tlk8w.css';
import '../../css/m/mc9n3acio.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="d19mzcbcn"/><path class="vna8tlk8w"/><path class="mc9n3acio"/></g>`,
		"fallback": "doodle-icons:layout-grid",
	});
}

export default Component;
