import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kn2ry0g3t.css';
import '../../css/m/m4pwkf2mx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="kn2ry0g3t"/><path class="m4pwkf2mx"/></g>`,
		"fallback": "solar:rewind-forward-line-duotone",
	});
}

export default Component;
