import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f4e_q1bea.css';
import '../../css/r/rbs-i1b4c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="f4e_q1bea"/><path class="rbs-i1b4c"/></g>`,
		"fallback": "vadivam:users-round",
	});
}

export default Component;
