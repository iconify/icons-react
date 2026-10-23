import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/ciq5y6qmo.css';
import '../../css/v/v6k7bebpa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ciq5y6qmo"/><path class="v6k7bebpa"/></g>`,
		"fallback": "vadivam:receipt-swiss-franc",
	});
}

export default Component;
