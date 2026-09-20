import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/na-paxbuk.css';
import '../../css/m/ms-45pbir.css';
import '../../css/m/mfvyn3b0e.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="na-paxbuk"/><path class="ms-45pbir"/><path class="mfvyn3b0e"/></g>`,
		"fallback": "streamline-flex-color:volume-level-high-flat",
	});
}

export default Component;
