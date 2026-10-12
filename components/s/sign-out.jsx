import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n8t6snn6g.css';
import '../../css/f/fy8sa_b4b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n8t6snn6g"/><path class="fy8sa_b4b"/></g>`,
		"fallback": "andrsrxn:sign-out",
	});
}

export default Component;
