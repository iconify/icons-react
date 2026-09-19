import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h5bo-kbda.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h5bo-kbda"/>`,
		"fallback": "bpmn:start-event-non-interrupting-message",
	});
}

export default Component;
