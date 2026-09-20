import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/nv49z4x2c.css';
import '../../css/k/k4a_8nb0z.css';
import '../../css/a/agvfakb4a.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="nv49z4x2c"/><path class="k4a_8nb0z"/><path class="agvfakb4a"/></g>`,
		"fallback": "streamline:notification-message-alert",
	});
}

export default Component;
