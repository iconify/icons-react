import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yy6r-4lmy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yy6r-4lmy"/>`,
		"fallback": "cbi:suzuki",
	});
}

export default Component;
