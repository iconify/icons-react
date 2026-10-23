import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/eg4h66b1c.css';
import '../../css/y/y1cqcx0qo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="eg4h66b1c"/><path class="y1cqcx0qo"/></g>`,
		"fallback": "vadivam:shield-ban",
	});
}

export default Component;
