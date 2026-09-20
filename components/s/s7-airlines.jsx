import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/amc1uab8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="amc1uab8u"/>`,
		"fallback": "thesvg-color:s7-airlines",
	});
}

export default Component;
