import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cy60v1k-k.css';
import '../../css/s/swz3ofbfn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cy60v1k-k"/><path class="swz3ofbfn"/></g>`,
		"fallback": "pixelarticons:shopping-bag",
	});
}

export default Component;
