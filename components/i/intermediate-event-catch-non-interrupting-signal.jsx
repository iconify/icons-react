import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/klu-8qj5j.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="klu-8qj5j"/>`,
		"fallback": "bpmn:intermediate-event-catch-non-interrupting-signal",
	});
}

export default Component;
