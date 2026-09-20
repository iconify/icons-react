import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/omjv7encm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="omjv7encm"/>`,
		"fallback": "selfhst:visa",
	});
}

export default Component;
