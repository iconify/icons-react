import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o9cngdc1l.css';
import '../../css/e/ew7188tnn.css';
import '../../css/b/blb99bcah.css';

const viewBox = {"width":2000,"height":2000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o9cngdc1l"><path class="ew7188tnn"/><path class="blb99bcah"/></g>`,
		"fallback": "bpmn:receive",
	});
}

export default Component;
