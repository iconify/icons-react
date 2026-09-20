import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/q/qtq6_xzuw.css';
import '../../css/w/wvy9m83zq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="qtq6_xzuw"/><path class="wvy9m83zq"/></g>`,
		"fallback": "streamline-flex-color:tooth-flat",
	});
}

export default Component;
