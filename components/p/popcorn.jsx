import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sbyjr751y.css';
import '../../css/u/ue2imhb3h.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/x/x6ihl6b_j.css';
import '../../css/h/h-hncl-8g.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sbyjr751y"/><path class="ue2imhb3h"/><g class="ij2x_72vy"><path class="x6ihl6b_j"/><path class="h-hncl-8g"/></g>`,
		"fallback": "openmoji:popcorn",
	});
}

export default Component;
