import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ytmp8tbaw.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ytmp8tbaw"/>`,
		"fallback": "bpmn:start-event-non-interrupting-multiple",
	});
}

export default Component;
