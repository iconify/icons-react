import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h2wpetb_p.css';
import '../../css/k/ktqaw1bmb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="h2wpetb_p"/><path class="ktqaw1bmb"/></g>`,
		"fallback": "pixelarticons:notebook",
	});
}

export default Component;
