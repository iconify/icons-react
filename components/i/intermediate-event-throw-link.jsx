import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e2mqlccww.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e2mqlccww"/>`,
		"fallback": "bpmn:intermediate-event-throw-link",
	});
}

export default Component;
