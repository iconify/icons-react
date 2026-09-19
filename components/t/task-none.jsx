import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p0028ibxc.css';

const viewBox = {"width":2000,"height":2000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p0028ibxc"/>`,
		"fallback": "bpmn:task-none",
	});
}

export default Component;
