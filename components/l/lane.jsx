import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jdg0_mb9m.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jdg0_mb9m"/>`,
		"fallback": "bpmn:lane",
	});
}

export default Component;
