import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/c4a9_ccmq.css';
import '../../css/m/m2rwd32ir.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="c4a9_ccmq"/><path class="m2rwd32ir"/></g>`,
		"fallback": "vadivam:shopping-bag",
	});
}

export default Component;
