import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/t/t6qvy1b9u.css';
import '../../css/m/mfvyn3b0e.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="t6qvy1b9u"/><path class="mfvyn3b0e"/></g>`,
		"fallback": "streamline-flex-color:volume-mute-flat",
	});
}

export default Component;
