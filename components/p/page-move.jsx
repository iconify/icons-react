import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-dc168xj.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/n/ne6g2tklt.css';
import '../../css/h/hv1f-5bwy.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-dc168xj"/><g class="ij2x_72vy"><path class="ne6g2tklt"/><path class="hv1f-5bwy"/></g>`,
		"fallback": "openmoji:page-move",
	});
}

export default Component;
