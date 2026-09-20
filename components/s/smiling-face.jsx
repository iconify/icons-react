import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/az7hstbmu.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/e/ecrffp_lt.css';
import '../../css/q/qmnpc1bre.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="az7hstbmu"/><g class="ij2x_72vy"><path class="ecrffp_lt"/><circle class="qmnpc1bre"/></g>`,
		"fallback": "openmoji:smiling-face",
	});
}

export default Component;
