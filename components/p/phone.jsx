import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/j/jyeysfb7o.css';
import '../../css/y/yer7eoxcb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="jyeysfb7o"/><path class="yer7eoxcb"/></g>`,
		"fallback": "doodle-icons:phone",
	});
}

export default Component;
