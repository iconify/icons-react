import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vu4v0ccni.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vu4v0ccni"/>`,
		"fallback": "bpmn:intermediate-event-throw-compensation",
	});
}

export default Component;
