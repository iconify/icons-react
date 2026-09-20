import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/ncz4__ixu.css';
import '../../css/f/fe3lddc0f.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ncz4__ixu"/><path class="fe3lddc0f"/></g>`,
		"fallback": "streamline:interface-upload-website-action-actions-computer-website-device-display-upload-monitor-screen",
	});
}

export default Component;
