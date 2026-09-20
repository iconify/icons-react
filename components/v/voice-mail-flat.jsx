import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xhvyj69ys.css';
import '../../css/d/d05uxvbpt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="xhvyj69ys"/><path class="d05uxvbpt"/></g>`,
		"fallback": "streamline-color:voice-mail-flat",
	});
}

export default Component;
