import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yzc9ocbqz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yzc9ocbqz"/>`,
		"fallback": "hugeicons:twitter",
	});
}

export default Component;
