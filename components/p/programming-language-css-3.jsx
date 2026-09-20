import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/ywz-3wdyi.css';
import '../../css/e/efe4b0_ic.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ywz-3wdyi"/><path class="efe4b0_ic"/></g>`,
		"fallback": "streamline-freehand:programming-language-css-3",
	});
}

export default Component;
