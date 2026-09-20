import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rweqjt_zr.css';
import '../../css/c/cy6-uac0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rweqjt_zr"/><path clip-rule="evenodd" class="cy6-uac0l"/></g>`,
		"fallback": "solar:layers-minimalistic-bold",
	});
}

export default Component;
