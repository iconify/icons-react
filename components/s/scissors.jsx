import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxyfpnb7a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uxyfpnb7a"/>`,
		"fallback": "hugeicons:scissors",
	});
}

export default Component;
