import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j0zdr4low.css';
import '../../css/l/lv-wwpbte.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j0zdr4low"/><path clip-rule="evenodd" class="lv-wwpbte"/></g>`,
		"fallback": "reicon:slider-v2-duotone",
	});
}

export default Component;
