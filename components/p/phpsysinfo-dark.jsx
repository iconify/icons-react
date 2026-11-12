import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iivk5q4jp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iivk5q4jp"/>`,
		"fallback": "selfhst:phpsysinfo-dark",
	});
}

export default Component;
