import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pqwke54yd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pqwke54yd"/>`,
		"fallback": "ion:ios-contacts",
	});
}

export default Component;
