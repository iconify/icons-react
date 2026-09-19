import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kbrnwgbzj.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kbrnwgbzj"/>`,
		"fallback": "bpmn:start-event-none",
	});
}

export default Component;
