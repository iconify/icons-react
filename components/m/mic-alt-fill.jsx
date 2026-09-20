import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sbvppdbyz.css';
import '../../css/j/j0bev-40b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sbvppdbyz"/><path clip-rule="evenodd" class="j0bev-40b"/></g>`,
		"fallback": "lets-icons:mic-alt-fill",
	});
}

export default Component;
