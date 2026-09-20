import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/xzz-193mk.css';
import '../../css/x/xopsq8bhy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="xzz-193mk"/><path class="xopsq8bhy"/></g>`,
		"fallback": "streamline-flex:notification-alarm-snooze",
	});
}

export default Component;
