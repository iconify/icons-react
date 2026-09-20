import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s-hjt14gf.css';
import '../../css/r/rs_kjob-q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="s-hjt14gf"/><path class="rs_kjob-q"/></g>`,
		"fallback": "solar:shop-minimalistic-outline",
	});
}

export default Component;
