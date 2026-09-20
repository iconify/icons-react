import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kxuvn-bta.css';
import '../../css/k/ktqaw1bmb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kxuvn-bta"/><path class="ktqaw1bmb"/></g>`,
		"fallback": "pixelarticons:notebook-sharp",
	});
}

export default Component;
