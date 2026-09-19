import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufy6p9byo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ufy6p9byo"/>`,
		"fallback": "hugeicons:pen-connect-wifi",
	});
}

export default Component;
