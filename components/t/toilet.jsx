import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lptx1rgle.css';
import '../../css/z/z93dh598w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="lptx1rgle"/><path class="wm-a z93dh598w"/></g>`,
		"fallback": "withicons:toilet",
	});
}

export default Component;
