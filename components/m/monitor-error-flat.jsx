import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/u/uoitckm8z.css';
import '../../css/j/j4c_x5bwc.css';
import '../../css/w/w6zuj4k8m.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="uoitckm8z"/><path class="j4c_x5bwc"/><path class="w6zuj4k8m"/></g>`,
		"fallback": "streamline-flex-color:monitor-error-flat",
	});
}

export default Component;
