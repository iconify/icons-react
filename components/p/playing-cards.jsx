import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h0f-kuuso.css';
import '../../css/c/cm2t7eo0v.css';
import '../../css/j/jwgaq4qmb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h0f-kuuso"/><rect transform="rotate(165 5.292 3.682)scale(1 -1)" class="cm2t7eo0v"/><path class="jwgaq4qmb"/></g>`,
		"fallback": "andrsrxn:playing-cards",
	});
}

export default Component;
