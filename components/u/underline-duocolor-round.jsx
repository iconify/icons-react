import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zaxhg3e5y.css';
import '../../css/p/ps0mh7bvo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zaxhg3e5y"/><path class="ps0mh7bvo"/></g>`,
		"fallback": "coolicons:underline-duocolor-round",
	});
}

export default Component;
