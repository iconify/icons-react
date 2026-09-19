import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/po3f_-4co.css';
import '../../css/b/b5pip-4kt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="po3f_-4co"/><path class="b5pip-4kt"/></g>`,
		"fallback": "fluent-emoji-high-contrast:teddy-bear",
	});
}

export default Component;
