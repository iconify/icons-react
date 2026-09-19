import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dbjxngb3o.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dbjxngb3o"/>`,
		"fallback": "bpmn:intermediate-event-throw-escalation",
	});
}

export default Component;
