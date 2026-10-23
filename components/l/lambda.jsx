import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x8_123bxh.css';
import '../../css/v/vy2bb2hul.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="x8_123bxh"/><path class="vy2bb2hul"/></g>`,
		"fallback": "vadivam:lambda",
	});
}

export default Component;
