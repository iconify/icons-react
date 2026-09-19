import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s8flzlb8i.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s8flzlb8i"/>`,
		"fallback": "bpmn:start-event-non-interrupting-parallel-multiple",
	});
}

export default Component;
