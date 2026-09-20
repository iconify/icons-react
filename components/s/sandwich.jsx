import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eccxkzksd.css';
import '../../css/b/bi4f5zq2g.css';
import '../../css/q/qepwlccda.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/t/tt9zo6bmf.css';
import '../../css/h/h-0rs9omy.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eccxkzksd"/><path class="bi4f5zq2g"/><path class="qepwlccda"/><g class="ij2x_72vy"><path class="tt9zo6bmf"/><path class="h-0rs9omy"/></g>`,
		"fallback": "openmoji:sandwich",
	});
}

export default Component;
