import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/elsz9acix.css';
import '../../css/n/ntpd7fc4k.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="elsz9acix"/><circle class="ntpd7fc4k"/></g>`,
		"fallback": "streamline:interface-dashboard-layout-2-corners-dashboard-frame-layout-circle-square-center",
	});
}

export default Component;
