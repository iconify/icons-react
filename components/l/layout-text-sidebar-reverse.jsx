import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h8zc39blm.css';
import '../../css/r/r9d3c_bio.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="h8zc39blm"/><path class="r9d3c_bio"/></g>`,
		"fallback": "bi:layout-text-sidebar-reverse",
	});
}

export default Component;
