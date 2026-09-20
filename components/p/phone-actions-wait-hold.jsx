import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/wcqgke-ht.css';
import '../../css/j/jzuan3b4u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="wcqgke-ht"/><path class="jzuan3b4u"/></g>`,
		"fallback": "streamline-freehand-color:phone-actions-wait-hold",
	});
}

export default Component;
