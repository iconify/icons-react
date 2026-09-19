import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bfx2w69mn.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bfx2w69mn"/>`,
		"fallback": "bpmn:start-event-non-interrupting-timer",
	});
}

export default Component;
