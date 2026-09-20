import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dfylubcds.css';
import '../../css/c/cfcq6qbjk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="dfylubcds"/><path class="cfcq6qbjk"/></g>`,
		"fallback": "streamline-color:online-medical-web-service-flat",
	});
}

export default Component;
