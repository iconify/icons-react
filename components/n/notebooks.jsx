import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/up_16cc0u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="up_16cc0u"/>`,
		"fallback": "uil:notebooks",
	});
}

export default Component;
