import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iwi8gpbuh.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iwi8gpbuh"/>`,
		"fallback": "bpmn:lane-divide-two",
	});
}

export default Component;
