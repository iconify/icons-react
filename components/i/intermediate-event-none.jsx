import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gab9z0b4o.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gab9z0b4o"/>`,
		"fallback": "bpmn:intermediate-event-none",
	});
}

export default Component;
