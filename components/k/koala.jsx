import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p1w68cc8d.css';
import '../../css/o/ocbctt2jf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p1w68cc8d"/><path class="ocbctt2jf"/></g>`,
		"fallback": "fluent-emoji-high-contrast:koala",
	});
}

export default Component;
