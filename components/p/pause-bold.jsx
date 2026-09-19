import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k8x9uuswb.css';
import '../../css/d/dcqpq2btz.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="k8x9uuswb"/><path class="dcqpq2btz"/></g>`,
		"fallback": "glyphs:pause-bold",
	});
}

export default Component;
