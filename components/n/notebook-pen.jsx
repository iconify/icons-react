import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/u8djjoheg.css';
import '../../css/m/mqfx5dq5o.css';
import '../../css/w/w9pcj6b5h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="u8djjoheg"/><path class="mqfx5dq5o wm-a"/><path class="w9pcj6b5h wm-s"/></g>`,
		"fallback": "withicons:notebook-pen",
	});
}

export default Component;
