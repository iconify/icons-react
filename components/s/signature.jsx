import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/r_sc4hbcp.css';
import '../../css/p/p190iqchd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="r_sc4hbcp"/><path class="p190iqchd"/></g>`,
		"fallback": "withicons-retro:signature",
	});
}

export default Component;
