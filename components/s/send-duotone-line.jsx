import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q74ok7b2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q74ok7b2n"/>`,
		"fallback": "lets-icons:send-duotone-line",
	});
}

export default Component;
