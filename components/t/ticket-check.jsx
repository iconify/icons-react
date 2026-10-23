import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/icyevt1yv.css';
import '../../css/t/tk9p2tbmt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="icyevt1yv"/><path class="tk9p2tbmt"/></g>`,
		"fallback": "vadivam:ticket-check",
	});
}

export default Component;
