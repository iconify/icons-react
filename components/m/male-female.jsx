import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gc0v658tc.css';

const viewBox = {"width":368,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gc0v658tc"/>`,
		"fallback": "zmdi:male-female",
	});
}

export default Component;
