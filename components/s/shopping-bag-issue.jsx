import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pi79h_b5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pi79h_b5e"/>`,
		"fallback": "iconoir:shopping-bag-issue",
	});
}

export default Component;
