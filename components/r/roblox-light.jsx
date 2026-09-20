import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ycbzi7r9u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ycbzi7r9u"/>`,
		"fallback": "selfhst:roblox-light",
	});
}

export default Component;
