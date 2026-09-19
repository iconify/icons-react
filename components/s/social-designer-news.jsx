import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hn5l_0bqz.css';
import '../../css/z/z2qhsz0wy.css';
import '../../css/a/aumxqe4yi.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hn5l_0bqz"/><path class="z2qhsz0wy"/><path class="aumxqe4yi"/></g>`,
		"fallback": "foundation:social-designer-news",
	});
}

export default Component;
