import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/q/qott1hmiq.css';
import '../../css/d/djdd7-5fn.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><path class="qott1hmiq"/><path class="djdd7-5fn"/></g>`,
		"fallback": "system-uicons:message-writing",
	});
}

export default Component;
