import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/v/vht90gcmd.css';
import '../../css/r/rm1prquhq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="vht90gcmd"/><path class="rm1prquhq"/></g>`,
		"fallback": "doodle-icons:tag",
	});
}

export default Component;
