import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ix8txo7ni.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ix8txo7ni"/>`,
		"fallback": "selfhst:netbird-dark",
	});
}

export default Component;
