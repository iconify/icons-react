import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j34rt5j7e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j34rt5j7e"/>`,
		"fallback": "mdi:t-shirt-v",
	});
}

export default Component;
