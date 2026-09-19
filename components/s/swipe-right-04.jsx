import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/si_iur2zm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="si_iur2zm"/>`,
		"fallback": "hugeicons:swipe-right-04",
	});
}

export default Component;
