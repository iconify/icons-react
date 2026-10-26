import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/q/q7ao4eg-v.css';
import '../../css/o/o67oqhbks.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="q7ao4eg-v"/><path class="o67oqhbks"/></g>`,
		"fallback": "doodle-icons:undo",
	});
}

export default Component;
