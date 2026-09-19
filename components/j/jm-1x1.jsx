import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/i231l3b7a.css';
import '../../css/o/osc8j6bfj.css';
import '../../css/i/iy9ho8z4p.css';
import '../../css/k/k4_lb0mkc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="i231l3b7a"/><path class="osc8j6bfj"/><path class="iy9ho8z4p"/><path class="k4_lb0mkc"/></g>`,
		"fallback": "flag:jm-1x1",
	});
}

export default Component;
