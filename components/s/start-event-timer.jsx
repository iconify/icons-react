import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mfai6u5du.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mfai6u5du"/>`,
		"fallback": "bpmn:start-event-timer",
	});
}

export default Component;
