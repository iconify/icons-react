import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/st9mc6zjx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="st9mc6zjx"/>`,
		"fallback": "ion:ios-checkbox",
	});
}

export default Component;
