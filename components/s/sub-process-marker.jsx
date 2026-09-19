import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iwub5-btk.css';

const viewBox = {"width":2000,"height":2000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iwub5-btk"/>`,
		"fallback": "bpmn:sub-process-marker",
	});
}

export default Component;
