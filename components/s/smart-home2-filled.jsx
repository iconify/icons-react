import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/ov-7mhb7f.css';
import '../../css/s/sc1y-lb6c.css';
import '../../css/h/h3tsf1b3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ov-7mhb7f"/><path class="sc1y-lb6c"/><path class="h3tsf1b3b"/></g>`,
		"fallback": "reicon:smart-home2-filled",
	});
}

export default Component;
