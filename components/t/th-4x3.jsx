import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/r_oy-9bnl.css';
import '../../css/f/ft60xpbjk.css';
import '../../css/u/ubl173t1c.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="r_oy-9bnl"/><path class="ft60xpbjk"/><path class="ubl173t1c"/></g>`,
		"fallback": "flag:th-4x3",
	});
}

export default Component;
