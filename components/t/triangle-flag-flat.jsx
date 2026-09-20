import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/x_9koycaw.css';
import '../../css/u/u_njrebie.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="x_9koycaw"/><path class="u_njrebie"/></g>`,
		"fallback": "streamline-flex-color:triangle-flag-flat",
	});
}

export default Component;
