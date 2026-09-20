import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/yngvwuq7v.css';
import '../../css/d/dwf15fb3w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="yngvwuq7v"/><path class="dwf15fb3w"/></g>`,
		"fallback": "reicon:pin-hospital-filled",
	});
}

export default Component;
