import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/te9lpbb8d.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="te9lpbb8d"/>`,
		"fallback": "bpmn:intermediate-event-catch-cancel",
	});
}

export default Component;
