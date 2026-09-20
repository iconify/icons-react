import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t0pm1q6sv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t0pm1q6sv"/>`,
		"fallback": "si:underline-fill",
	});
}

export default Component;
