import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fo625itiu.css';
import '../../css/r/rerwjev9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fo625itiu"/><path class="rerwjev9k"/></g>`,
		"fallback": "hugeicons:square-arrow-out-up-right",
	});
}

export default Component;
