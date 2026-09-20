import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pqbn9fc6c.css';
import '../../css/k/kich1sdgo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pqbn9fc6c"/><path class="kich1sdgo"/></g>`,
		"fallback": "solar:outgoing-call-rounded-bold",
	});
}

export default Component;
