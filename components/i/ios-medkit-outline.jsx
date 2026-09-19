import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iqm3cru9o.css';
import '../../css/u/up_x2juwn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iqm3cru9o"/><path class="up_x2juwn"/>`,
		"fallback": "ion:ios-medkit-outline",
	});
}

export default Component;
