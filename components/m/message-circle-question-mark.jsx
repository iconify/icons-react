import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zsjpyz3yx.css';
import '../../css/b/boexblb8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zsjpyz3yx"/><path class="boexblb8b"/></g>`,
		"fallback": "vadivam:message-circle-question-mark",
	});
}

export default Component;
