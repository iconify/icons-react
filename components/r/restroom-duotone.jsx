import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lv41xib2l.css';
import '../../css/r/rt09xibxu.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lv41xib2l"/><path class="rt09xibxu"/></g>`,
		"fallback": "pullo:restroom-duotone",
	});
}

export default Component;
