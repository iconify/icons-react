import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c7f52tb7q.css';
import '../../css/q/qoh9o0n0y.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c7f52tb7q"/><path class="qoh9o0n0y"/></g>`,
		"fallback": "pullo:smiley-plus-duotone",
	});
}

export default Component;
