import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/r-g639k0z.css';
import '../../css/f/fta9qhfei.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="r-g639k0z"/><path class="fta9qhfei"/></g>`,
		"fallback": "withicons-retro:sort-alpha",
	});
}

export default Component;
