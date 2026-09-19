import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oi-m8xbeq.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oi-m8xbeq"/>`,
		"fallback": "bpmn:intermediate-event-catch-non-interrupting-condition",
	});
}

export default Component;
