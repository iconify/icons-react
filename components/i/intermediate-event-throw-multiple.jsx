import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ey1cel3wh.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ey1cel3wh"/>`,
		"fallback": "bpmn:intermediate-event-throw-multiple",
	});
}

export default Component;
