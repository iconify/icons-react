import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i8z775b8m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i8z775b8m"/>`,
		"fallback": "hugeicons:smartphone-nfc",
	});
}

export default Component;
