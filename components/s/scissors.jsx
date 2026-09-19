import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wom6iac3e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wom6iac3e"/>`,
		"fallback": "heroicons:scissors",
	});
}

export default Component;
