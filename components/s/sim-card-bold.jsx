import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qx1g21b5w.css';
import '../../css/y/y9kfqob_x.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qx1g21b5w"/><path clip-rule="evenodd" class="y9kfqob_x"/></g>`,
		"fallback": "glyphs:sim-card-bold",
	});
}

export default Component;
