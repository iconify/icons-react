import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/c/c7-0wgmtu.css';
import '../../css/f/f_7iq51bv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="c7-0wgmtu"/><path class="f_7iq51bv"/></g>`,
		"fallback": "doodle-icons:warning",
	});
}

export default Component;
