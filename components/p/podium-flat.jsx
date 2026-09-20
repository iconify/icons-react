import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/w3b-8u0ci.css';
import '../../css/u/u5z9w4dhl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="w3b-8u0ci"/><path class="u5z9w4dhl"/></g>`,
		"fallback": "streamline-color:podium-flat",
	});
}

export default Component;
