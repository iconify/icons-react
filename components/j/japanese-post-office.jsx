import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/isb8xdbhq.css';
import '../../css/v/vn1y3uobj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="isb8xdbhq"/><path class="vn1y3uobj"/></g>`,
		"fallback": "fluent-emoji-high-contrast:japanese-post-office",
	});
}

export default Component;
