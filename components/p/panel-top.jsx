import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/t9ymevbgl.css';
import '../../css/v/v4h-hybof.css';
import '../../css/s/sbf5uab6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="t9ymevbgl wm-shadow"/><path class="v4h-hybof"/><path class="sbf5uab6b"/></g>`,
		"fallback": "withicons-retro:panel-top",
	});
}

export default Component;
