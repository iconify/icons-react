import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/z8x7oi4it.css';
import '../../css/h/hkcj5-bst.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="z8x7oi4it"/><path class="hkcj5-bst wm-a"/></g>`,
		"fallback": "withicons:tablet",
	});
}

export default Component;
