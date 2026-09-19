import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zafw3kuon.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zafw3kuon"/>`,
		"fallback": "bpmn:intermediate-event-catch-non-interrupting-parallel-multiple",
	});
}

export default Component;
