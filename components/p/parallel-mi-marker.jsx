import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hw70umb4x.css';

const viewBox = {"width":2000,"height":2000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hw70umb4x"/>`,
		"fallback": "bpmn:parallel-mi-marker",
	});
}

export default Component;
