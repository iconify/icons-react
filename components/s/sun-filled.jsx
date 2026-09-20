import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c3f8qryzp.css';
import '../../css/k/kif_g8r7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c3f8qryzp"/><path clip-rule="evenodd" class="kif_g8r7m"/></g>`,
		"fallback": "reicon:sun-filled",
	});
}

export default Component;
