import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/nrhq9wbem.css';
import '../../css/g/goloxm9_l.css';
import '../../css/w/w_b4t0bzz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="nrhq9wbem"/><path class="goloxm9_l"/><path class="w_b4t0bzz"/></g>`,
		"fallback": "streamline-freehand-color:mobilephone-action-notification-allowed",
	});
}

export default Component;
