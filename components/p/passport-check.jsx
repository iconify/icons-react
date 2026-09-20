import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ywlt9kj8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ywlt9kj8o"/>`,
		"fallback": "mdi:passport-check",
	});
}

export default Component;
