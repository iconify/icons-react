import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-oj7jbwd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u-oj7jbwd"/>`,
		"fallback": "simple-icons:trmnl",
	});
}

export default Component;
