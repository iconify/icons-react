import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ibypkwq7u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ibypkwq7u"/>`,
		"fallback": "simple-icons:keepassxc",
	});
}

export default Component;
