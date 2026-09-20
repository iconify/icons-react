import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/elyed7l1j.css';
import '../../css/g/g2ejn3rhn.css';
import '../../css/a/aldj5jhrk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="elyed7l1j"/><path class="g2ejn3rhn"/><path class="aldj5jhrk"/></g>`,
		"fallback": "solar:socket-outline",
	});
}

export default Component;
