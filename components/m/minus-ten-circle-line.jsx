import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d10gpj2xj.css';
import '../../css/j/j-46ttn1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="d10gpj2xj"/><circle transform="matrix(-1 0 0 1 12 12)" class="j-46ttn1w"/></g>`,
		"fallback": "majesticons:minus-ten-circle-line",
	});
}

export default Component;
