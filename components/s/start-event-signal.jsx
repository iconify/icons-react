import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cixp7rbfz.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cixp7rbfz"/>`,
		"fallback": "bpmn:start-event-signal",
	});
}

export default Component;
