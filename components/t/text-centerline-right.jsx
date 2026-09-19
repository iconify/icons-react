import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fykl5sbcs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fykl5sbcs"/>`,
		"fallback": "hugeicons:text-centerline-right",
	});
}

export default Component;
