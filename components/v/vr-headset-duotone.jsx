import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gcjsdfb7i.css';
import '../../css/f/fha26zc1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gcjsdfb7i secondary"/><path class="fha26zc1e primary"/></g>`,
		"fallback": "iconaut:vr-headset-duotone",
	});
}

export default Component;
