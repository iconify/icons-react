import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/e0izkne-h.css';
import '../../css/u/unkvyfx-l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="e0izkne-h"/><path class="unkvyfx-l wm-s"/></g>`,
		"fallback": "withicons:unlink",
	});
}

export default Component;
