import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zeujr8b0c.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zeujr8b0c"/>`,
		"fallback": "bpmn:intermediate-event-throw-signal",
	});
}

export default Component;
