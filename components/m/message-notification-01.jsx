import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/ix6jmnb6s.css';
import '../../css/m/mvt0f2_wz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ix6jmnb6s"/><path class="mvt0f2_wz"/></g>`,
		"fallback": "hugeicons:message-notification-01",
	});
}

export default Component;
