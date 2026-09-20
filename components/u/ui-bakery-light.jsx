import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hkh80fwxx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hkh80fwxx"/>`,
		"fallback": "selfhst:ui-bakery-light",
	});
}

export default Component;
