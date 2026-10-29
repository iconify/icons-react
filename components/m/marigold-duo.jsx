import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gfuk4nbmr.css';
import '../../css/e/eez02jb3b.css';
import '../../css/i/ij72ljbex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="gfuk4nbmr"/><path class="eez02jb3b wm-a"/><path class="ij72ljbex"/></g>`,
		"fallback": "withicons:marigold-duo",
	});
}

export default Component;
