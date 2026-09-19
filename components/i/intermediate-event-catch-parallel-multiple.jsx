import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gjjz6w-nb.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gjjz6w-nb"/>`,
		"fallback": "bpmn:intermediate-event-catch-parallel-multiple",
	});
}

export default Component;
