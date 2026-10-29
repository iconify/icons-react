import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/u315dy91q.css';
import '../../css/l/lof7i1b0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="u315dy91q"/><path class="lof7i1b0v wm-a"/></g>`,
		"fallback": "withicons:sort-alpha",
	});
}

export default Component;
