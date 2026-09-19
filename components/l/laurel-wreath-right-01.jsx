import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/trfqa1tba.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="trfqa1tba"/>`,
		"fallback": "hugeicons:laurel-wreath-right-01",
	});
}

export default Component;
