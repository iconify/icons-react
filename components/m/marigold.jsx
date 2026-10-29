import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/ij72ljbex.css';
import '../../css/e/eez02jb3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ij72ljbex"/><path class="eez02jb3b wm-a"/></g>`,
		"fallback": "withicons:marigold",
	});
}

export default Component;
