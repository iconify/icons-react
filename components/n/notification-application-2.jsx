import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/cq8fz5tgo.css';
import '../../css/b/bm1z4bkou.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="cq8fz5tgo"/><path class="bm1z4bkou"/></g>`,
		"fallback": "streamline:notification-application-2",
	});
}

export default Component;
