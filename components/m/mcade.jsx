import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y6s6452ut.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y6s6452ut"/>`,
		"fallback": "token:mcade",
	});
}

export default Component;
