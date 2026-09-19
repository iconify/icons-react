import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zg1q73zov.css';

const viewBox = {"width":2000,"height":2000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zg1q73zov"/>`,
		"fallback": "bpmn:sequential-mi-marker",
	});
}

export default Component;
