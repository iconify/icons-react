import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qlrf9sb0u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qlrf9sb0u"/>`,
		"fallback": "eva:volume-down-outline",
	});
}

export default Component;
