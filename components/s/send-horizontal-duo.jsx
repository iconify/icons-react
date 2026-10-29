import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/q_9pyo6hu.css';
import '../../css/h/h0rhmfbpn.css';
import '../../css/u/uu_zhdcpe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="q_9pyo6hu"/><path class="h0rhmfbpn wm-a"/><path class="uu_zhdcpe"/></g>`,
		"fallback": "withicons:send-horizontal-duo",
	});
}

export default Component;
