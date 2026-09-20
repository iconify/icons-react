import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/z/zkv446btt.css';
import '../../css/w/wxt4s-b2x.css';
import '../../css/n/nk6_eibzl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="zkv446btt"/><path class="wxt4s-b2x"/><path class="nk6_eibzl"/></g>`,
		"fallback": "streamline-color:keyboard-wireless-2-flat",
	});
}

export default Component;
