import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zj73phbbt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zj73phbbt"/>`,
		"fallback": "flowbite:letter-underline-outline",
	});
}

export default Component;
