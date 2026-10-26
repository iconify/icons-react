import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/v/v_iwu7bdo.css';
import '../../css/d/ds6f9vb4b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="v_iwu7bdo"/><path class="ds6f9vb4b"/></g>`,
		"fallback": "doodle-icons:pie-slice",
	});
}

export default Component;
