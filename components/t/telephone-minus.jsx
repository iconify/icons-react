import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/ggvtu_i3l.css';
import '../../css/d/d0dntab6u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ggvtu_i3l"/><path class="d0dntab6u"/></g>`,
		"fallback": "bi:telephone-minus",
	});
}

export default Component;
