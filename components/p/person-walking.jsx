import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i5wv7fbyy.css';
import '../../css/u/un_991t-w.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i5wv7fbyy"/><path class="un_991t-w"/></g>`,
		"fallback": "bi:person-walking",
	});
}

export default Component;
