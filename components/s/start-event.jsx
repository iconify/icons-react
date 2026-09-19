import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b2ujshd8s.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b2ujshd8s"/>`,
		"fallback": "bpmn:start-event",
	});
}

export default Component;
