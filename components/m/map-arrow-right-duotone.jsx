import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/twi2j_k5l.css';
import '../../css/p/pk3ml2b2z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="twi2j_k5l"/><path class="pk3ml2b2z"/></g>`,
		"fallback": "reicon:map-arrow-right-duotone",
	});
}

export default Component;
