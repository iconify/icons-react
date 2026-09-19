import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i4o_uwagr.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i4o_uwagr"/>`,
		"fallback": "bpmn:intermediate-event-catch-non-interrupting-multiple",
	});
}

export default Component;
