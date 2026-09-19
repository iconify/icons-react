import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qk4sq3bim.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qk4sq3bim"/>`,
		"fallback": "hugeicons:text-firstline-right",
	});
}

export default Component;
