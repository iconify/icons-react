import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mgembdcbc.css';
import '../../css/g/g5qjwyjaw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mgembdcbc"/><path class="g5qjwyjaw"/></g>`,
		"fallback": "reicon:magnet-wave-filled",
	});
}

export default Component;
