import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ywzbqab8b.css';
import '../../css/f/f-r1r51fp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ywzbqab8b"/><path class="f-r1r51fp"/></g>`,
		"fallback": "at-icons:shop",
	});
}

export default Component;
