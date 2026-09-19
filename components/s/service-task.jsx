import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/looy1fptd.css';
import '../../css/w/wesrhrbfh.css';

const viewBox = {"width":2000,"height":2000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(0 947.638)"><rect class="looy1fptd"/><path class="wesrhrbfh"/></g>`,
		"fallback": "bpmn:service-task",
	});
}

export default Component;
