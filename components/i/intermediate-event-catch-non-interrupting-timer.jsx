import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rxnva97bw.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rxnva97bw"/>`,
		"fallback": "bpmn:intermediate-event-catch-non-interrupting-timer",
	});
}

export default Component;
