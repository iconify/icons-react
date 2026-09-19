import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nw5oqcbgf.css';
import '../../css/m/m7vgv3b-u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nw5oqcbgf"/><path class="m7vgv3b-u"/></g>`,
		"fallback": "bi:person-arms-up",
	});
}

export default Component;
