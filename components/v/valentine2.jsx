import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qehfqdb5n.css';
import '../../css/c/c-gsxy3zd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qehfqdb5n"/><path class="c-gsxy3zd"/></g>`,
		"fallback": "bi:valentine2",
	});
}

export default Component;
