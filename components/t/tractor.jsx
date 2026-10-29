import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zjj76nbck.css';
import '../../css/a/ap_dl2buk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zjj76nbck"/><path class="ap_dl2buk"/></g>`,
		"fallback": "vadivam:tractor",
	});
}

export default Component;
