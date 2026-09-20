import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ec0nt3i4y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ec0nt3i4y"/>`,
		"fallback": "majesticons:receipt-text-line",
	});
}

export default Component;
