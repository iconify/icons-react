import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/s8lcj2d8b.css';
import '../../css/i/i2934ybue.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="s8lcj2d8b"/><path class="i2934ybue"/></g>`,
		"fallback": "streamline-ultimate:usb-cable",
	});
}

export default Component;
