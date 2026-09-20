import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k5jb4sbzv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k5jb4sbzv"/>`,
		"fallback": "mdi:letter-t-circle-outline",
	});
}

export default Component;
