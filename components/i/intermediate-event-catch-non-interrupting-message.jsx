import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jv6qv8ips.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jv6qv8ips"/>`,
		"fallback": "bpmn:intermediate-event-catch-non-interrupting-message",
	});
}

export default Component;
