import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/k/kp6p4nvcu.css';
import '../../css/f/fhg14db3y.css';
import '../../css/q/qk-6jdbzy.css';
import '../../css/s/s1nku5boo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="kp6p4nvcu"/><path class="fhg14db3y"/><path class="qk-6jdbzy"/><path class="s1nku5boo"/></g>`,
		"fallback": "streamline-freehand-color:products-purse-2",
	});
}

export default Component;
