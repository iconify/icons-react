import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/j/j87q752ks.css';
import '../../css/w/wxvxs_byh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="j87q752ks"/><path class="wxvxs_byh"/></g>`,
		"fallback": "streamline-freehand-color:mobilephone-action-cash",
	});
}

export default Component;
