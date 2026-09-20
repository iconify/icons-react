import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/j/jz0zqnb4y.css';
import '../../css/p/pmove9s5h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="jz0zqnb4y"/><path class="pmove9s5h"/></g>`,
		"fallback": "reicon:money-add",
	});
}

export default Component;
