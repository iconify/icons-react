import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fajg1w5pf.css';

const viewBox = {"width":2000,"height":2000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fajg1w5pf"/>`,
		"fallback": "bpmn:loop-marker",
	});
}

export default Component;
