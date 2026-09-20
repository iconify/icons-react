import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sh569x-ti.css';
import '../../css/i/i9d56db8d.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/k/kebej8zjv.css';
import '../../css/s/sdm1hnz8s.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sh569x-ti"/><path class="i9d56db8d"/><g class="ij2x_72vy"><path class="kebej8zjv"/><path class="sdm1hnz8s"/></g>`,
		"fallback": "openmoji:roasted-sweet-potato",
	});
}

export default Component;
