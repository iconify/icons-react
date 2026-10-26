import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/z/zma5a-b_v.css';
import '../../css/w/we11k29vy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="zma5a-b_v"/><path class="we11k29vy"/></g>`,
		"fallback": "doodle-icons:trash",
	});
}

export default Component;
