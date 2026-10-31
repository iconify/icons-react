import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/ibd3773pa.css';
import '../../css/d/dibhkxb1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ibd3773pa"/><path class="dibhkxb1e"/></g>`,
		"fallback": "withicons-retro:maximize",
	});
}

export default Component;
