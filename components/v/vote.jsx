import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lady6-bdq.css';
import '../../css/q/q4qkzsbxl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lady6-bdq"/><path class="q4qkzsbxl"/></g>`,
		"fallback": "vadivam:vote",
	});
}

export default Component;
