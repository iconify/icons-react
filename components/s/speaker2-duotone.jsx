import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/roky1l4ah.css';
import '../../css/q/qzxt4_bvs.css';
import '../../css/h/hwo0te9vb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="roky1l4ah"/><path class="qzxt4_bvs"/><path clip-rule="evenodd" class="hwo0te9vb"/></g>`,
		"fallback": "reicon:speaker2-duotone",
	});
}

export default Component;
