import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f6rnldh-i.css';
import '../../css/b/b20b5u60y.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f6rnldh-i"/><path class="b20b5u60y"/></g>`,
		"fallback": "bi:search-heart",
	});
}

export default Component;
