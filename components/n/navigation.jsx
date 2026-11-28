import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xh6vewc5u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xh6vewc5u"/>`,
		"fallback": "noviair-light:navigation",
	});
}

export default Component;
