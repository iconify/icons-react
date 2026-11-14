import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yfxbc5b_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yfxbc5b_e"/>`,
		"fallback": "hugeicons:pound-sterling",
	});
}

export default Component;
