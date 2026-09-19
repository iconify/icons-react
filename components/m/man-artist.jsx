import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b_np3ukdd.css';
import '../../css/d/ds3iw5z2y.css';
import '../../css/w/w4opac-us.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b_np3ukdd"/><path class="ds3iw5z2y"/><path class="w4opac-us"/></g>`,
		"fallback": "fluent-emoji-high-contrast:man-artist",
	});
}

export default Component;
