import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wzx0ndb9k.css';
import '../../css/i/i9imomd3s.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wzx0ndb9k"/><path class="i9imomd3s"/></g>`,
		"fallback": "rivet-icons:trash",
	});
}

export default Component;
