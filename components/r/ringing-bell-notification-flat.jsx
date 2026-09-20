import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xzs-dkbqh.css';
import '../../css/c/ckqnq54zt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="xzs-dkbqh"/><path class="ckqnq54zt"/></g>`,
		"fallback": "streamline-color:ringing-bell-notification-flat",
	});
}

export default Component;
