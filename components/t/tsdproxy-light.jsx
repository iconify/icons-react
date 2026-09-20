import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r9blw_16z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r9blw_16z"/>`,
		"fallback": "selfhst:tsdproxy-light",
	});
}

export default Component;
