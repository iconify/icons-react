import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j21h_ntzq.css';
import '../../css/v/v6k7bebpa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="j21h_ntzq"/><path class="v6k7bebpa"/></g>`,
		"fallback": "vadivam:receipt-swiss-franc",
	});
}

export default Component;
