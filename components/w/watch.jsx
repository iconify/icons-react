import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dwtajqsqn.css';
import '../../css/e/ek7lttj2r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dwtajqsqn"/><path class="ek7lttj2r"/></g>`,
		"fallback": "bi:watch",
	});
}

export default Component;
