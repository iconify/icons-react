import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/p/p53aibb7y.css';
import '../../css/i/isx_m27xg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="p53aibb7y"/><path class="isx_m27xg"/></g>`,
		"fallback": "doodle-icons:log-out",
	});
}

export default Component;
