import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/wvkftvb4s.css';
import '../../css/h/hwzt5lt7x.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><circle class="wvkftvb4s"/><path class="hwzt5lt7x"/></g>`,
		"fallback": "streamline:interface-time-alarm-notification-alert-bell-wake-clock-alarm",
	});
}

export default Component;
