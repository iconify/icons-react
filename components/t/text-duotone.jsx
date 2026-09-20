import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ywo665bia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ywo665bia"/>`,
		"fallback": "si:text-duotone",
	});
}

export default Component;
