import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dr0xo5b5z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dr0xo5b5z"/>`,
		"fallback": "thesvg-color:json-web-tokens",
	});
}

export default Component;
