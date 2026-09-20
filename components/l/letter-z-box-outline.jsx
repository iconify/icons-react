import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vfn9nbc2u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vfn9nbc2u"/>`,
		"fallback": "mdi:letter-z-box-outline",
	});
}

export default Component;
