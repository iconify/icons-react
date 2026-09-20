import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b1q02n5hx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b1q02n5hx"/>`,
		"fallback": "mdi:tablet-mobile-phone",
	});
}

export default Component;
