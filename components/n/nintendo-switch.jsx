import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/an77xfb1x.css';

const viewBox = {"width":512,"height":464.6};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="an77xfb1x"/>`,
		"fallback": "thesvg-color:nintendo-switch",
	});
}

export default Component;
