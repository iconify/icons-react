import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/sfof7_b9k.css';
import '../../css/d/dyaf397_x.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="sfof7_b9k"/><path class="dyaf397_x"/></g>`,
		"fallback": "streamline:interface-download-website-action-actions-computer-website-device-display-download-monitor-screen",
	});
}

export default Component;
