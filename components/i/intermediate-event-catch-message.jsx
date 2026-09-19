import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flwdm6b3y.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="flwdm6b3y"/>`,
		"fallback": "bpmn:intermediate-event-catch-message",
	});
}

export default Component;
