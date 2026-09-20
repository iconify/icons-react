import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tnsow-zal.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tnsow-zal"/>`,
		"fallback": "majesticons:tooltip-text-line",
	});
}

export default Component;
