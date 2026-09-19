import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p9ul1n1-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p9ul1n1-i"/>`,
		"fallback": "feather:slack",
	});
}

export default Component;
