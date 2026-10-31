import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tjn55_b_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tjn55_b_u"/>`,
		"fallback": "coolicons:volume-low-round",
	});
}

export default Component;
