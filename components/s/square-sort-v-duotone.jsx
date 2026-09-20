import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/twwywab3d.css';
import '../../css/s/sxr7sbcqg.css';
import '../../css/z/znqzvjacy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="twwywab3d"/><path class="sxr7sbcqg"/><path class="znqzvjacy"/></g>`,
		"fallback": "reicon:square-sort-v-duotone",
	});
}

export default Component;
