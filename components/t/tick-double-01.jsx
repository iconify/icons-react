import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xoo_40b-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xoo_40b-b"/>`,
		"fallback": "hugeicons:tick-double-01",
	});
}

export default Component;
