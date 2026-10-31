import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/tfaqlbbjl.css';
import '../../css/u/uixotubdy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="tfaqlbbjl"/><path class="uixotubdy"/></g>`,
		"fallback": "withicons-retro:recycle",
	});
}

export default Component;
