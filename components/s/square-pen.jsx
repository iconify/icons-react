import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cxmnjt2gf.css';
import '../../css/x/xhrhwe8se.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="cxmnjt2gf"/><path class="xhrhwe8se"/></g>`,
		"fallback": "vadivam:square-pen",
	});
}

export default Component;
