import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/aq4fvy5jc.css';
import '../../css/s/sjv5t-tqe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="aq4fvy5jc"/><path class="sjv5t-tqe"/></g>`,
		"fallback": "vadivam:square-chevron-up",
	});
}

export default Component;
