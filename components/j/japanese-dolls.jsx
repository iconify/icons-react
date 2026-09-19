import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bbibku9pi.css';
import '../../css/j/j5isder0i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bbibku9pi"/><path class="j5isder0i"/></g>`,
		"fallback": "fluent-emoji-high-contrast:japanese-dolls",
	});
}

export default Component;
