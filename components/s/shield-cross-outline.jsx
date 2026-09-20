import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vfvdlcbtv.css';
import '../../css/d/d7l4obrtp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vfvdlcbtv"/><path clip-rule="evenodd" class="d7l4obrtp"/></g>`,
		"fallback": "solar:shield-cross-outline",
	});
}

export default Component;
