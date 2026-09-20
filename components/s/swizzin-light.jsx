import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gv6kxplzl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gv6kxplzl"/>`,
		"fallback": "selfhst:swizzin-light",
	});
}

export default Component;
