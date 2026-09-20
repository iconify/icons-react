import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i_wg89hjr.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/k/kzd57cc0u.css';
import '../../css/h/h3g8i1brp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i_wg89hjr"/><g class="mc2zb0bvp"><path class="kzd57cc0u"/><path class="h3g8i1brp"/></g></g>`,
		"fallback": "solar:volume-loud-bold-duotone",
	});
}

export default Component;
