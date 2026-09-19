import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/lzat6bccq.css';
import '../../css/i/ix74hpb0f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="lzat6bccq"/><path class="ix74hpb0f"/></g>`,
		"fallback": "hugeicons:message-notification-01",
	});
}

export default Component;
