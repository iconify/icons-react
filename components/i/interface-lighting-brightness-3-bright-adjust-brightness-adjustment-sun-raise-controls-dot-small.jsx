import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/cq971jbmr.css';
import '../../css/q/q_9w4ccjg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><circle class="cq971jbmr"/><path class="q_9w4ccjg"/></g>`,
		"fallback": "streamline:interface-lighting-brightness-3-bright-adjust-brightness-adjustment-sun-raise-controls-dot-small",
	});
}

export default Component;
