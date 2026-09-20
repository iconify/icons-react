import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p30qmac3l.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p30qmac3l"/>`,
		"fallback": "streamline:interface-alert-alarm-bell-off-disable-silent-notification-off-silence-alarm-bell-alert",
	});
}

export default Component;
