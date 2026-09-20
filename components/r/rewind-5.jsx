import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yzod95b5u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yzod95b5u"/>`,
		"fallback": "mdi:rewind-5",
	});
}

export default Component;
