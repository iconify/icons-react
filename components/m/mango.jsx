import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o0p4kdb2y.css';
import '../../css/a/acqpxmbdr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="o0p4kdb2y"/><path class="acqpxmbdr"/></g>`,
		"fallback": "vadivam:mango",
	});
}

export default Component;
