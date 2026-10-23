import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tkgv32aug.css';
import '../../css/y/yfzz-qb_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tkgv32aug"/><path class="yfzz-qb_n"/></g>`,
		"fallback": "vadivam:pc-case",
	});
}

export default Component;
