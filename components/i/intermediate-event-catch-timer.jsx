import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/euc22-b7s.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="euc22-b7s"/>`,
		"fallback": "bpmn:intermediate-event-catch-timer",
	});
}

export default Component;
