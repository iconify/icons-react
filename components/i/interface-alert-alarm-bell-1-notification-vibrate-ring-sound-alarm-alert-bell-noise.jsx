import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c83vv2bzi.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c83vv2bzi"/>`,
		"fallback": "streamline:interface-alert-alarm-bell-1-notification-vibrate-ring-sound-alarm-alert-bell-noise",
	});
}

export default Component;
