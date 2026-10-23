import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/oe3eu-xnt.css';
import '../../css/g/gkiq2cbvo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="oe3eu-xnt"/><path class="gkiq2cbvo"/></g>`,
		"fallback": "vadivam:trophy",
	});
}

export default Component;
