import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/efyehq74k.css';
import '../../css/q/q43g0k8pe.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="efyehq74k"/><path class="q43g0k8pe"/></g>`,
		"fallback": "streamline:mail-send-envelope",
	});
}

export default Component;
