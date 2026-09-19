import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/npzpgxnxe.css';
import '../../css/w/wtbz1yfme.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="npzpgxnxe"/><path class="wtbz1yfme"/></g>`,
		"fallback": "heroicons-solid:truck",
	});
}

export default Component;
