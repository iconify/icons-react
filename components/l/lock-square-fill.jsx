import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qu56ovb5t.css';
import '../../css/x/x8f5lbcvk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qu56ovb5t"/><path class="x8f5lbcvk"/>`,
		"fallback": "mage:lock-square-fill",
	});
}

export default Component;
