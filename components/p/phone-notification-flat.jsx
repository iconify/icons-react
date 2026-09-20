import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/nf_yewbvo.css';
import '../../css/c/c4h9oybhh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="nf_yewbvo"/><path class="c4h9oybhh"/></g>`,
		"fallback": "streamline-flex-color:phone-notification-flat",
	});
}

export default Component;
