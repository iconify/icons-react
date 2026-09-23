import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qn0lq48aj.css';
import '../../css/h/hanb3q1-y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qn0lq48aj"/><path class="hanb3q1-y"/></g>`,
		"fallback": "keyline-icons:language-sparkles",
	});
}

export default Component;
