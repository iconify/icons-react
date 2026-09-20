import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2kdx0bfi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k2kdx0bfi"/>`,
		"fallback": "thesvg:vagrant",
	});
}

export default Component;
