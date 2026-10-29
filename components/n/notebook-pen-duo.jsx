import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vl3b7db-k.css';
import '../../css/t/t4yn7cc_d.css';
import '../../css/w/w9pcj6b5h.css';
import '../../css/u/u8djjoheg.css';
import '../../css/m/mqfx5dq5o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="vl3b7db-k"/><path class="t4yn7cc_d wm-s"/><path class="w9pcj6b5h wm-s"/><path class="u8djjoheg"/><path class="mqfx5dq5o wm-a"/></g>`,
		"fallback": "withicons:notebook-pen-duo",
	});
}

export default Component;
