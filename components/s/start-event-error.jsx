import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f4vcp_bxy.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f4vcp_bxy"/>`,
		"fallback": "bpmn:start-event-error",
	});
}

export default Component;
