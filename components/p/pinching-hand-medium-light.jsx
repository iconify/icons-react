import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dl3m4hgjx.css';
import '../../css/h/hnmm-ybvd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dl3m4hgjx"/><path class="hnmm-ybvd"/></g>`,
		"fallback": "fluent-emoji-flat:pinching-hand-medium-light",
	});
}

export default Component;
