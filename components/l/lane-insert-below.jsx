import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ruk79mbge.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ruk79mbge"/>`,
		"fallback": "bpmn:lane-insert-below",
	});
}

export default Component;
