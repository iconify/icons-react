import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d_jjm0b1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d_jjm0b1u"/>`,
		"fallback": "ri:meta-fill",
	});
}

export default Component;
