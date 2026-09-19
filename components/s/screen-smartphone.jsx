import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vy3_k6b3r.css';
import '../../css/z/z-jza3xhc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vy3_k6b3r"/><path class="z-jza3xhc"/>`,
		"fallback": "cil:screen-smartphone",
	});
}

export default Component;
