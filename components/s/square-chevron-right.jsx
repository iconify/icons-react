import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qh0r0000e.css';
import '../../css/w/wnss3cv4y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qh0r0000e"/><path class="wnss3cv4y"/></g>`,
		"fallback": "vadivam:square-chevron-right",
	});
}

export default Component;
