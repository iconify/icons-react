import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hu1h2lvpb.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hu1h2lvpb"/>`,
		"fallback": "bpmn:intermediate-event-catch-link",
	});
}

export default Component;
