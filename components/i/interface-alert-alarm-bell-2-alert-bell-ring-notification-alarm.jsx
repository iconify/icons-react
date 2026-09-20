import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/obyc-wpuo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="obyc-wpuo"/>`,
		"fallback": "streamline:interface-alert-alarm-bell-2-alert-bell-ring-notification-alarm",
	});
}

export default Component;
