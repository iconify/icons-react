import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kxhl90b_c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kxhl90b_c"/>`,
		"fallback": "mdi:simple-icons",
	});
}

export default Component;
