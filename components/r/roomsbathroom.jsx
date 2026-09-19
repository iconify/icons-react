import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ludhmjn2r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ludhmjn2r"/>`,
		"fallback": "cbi:roomsbathroom",
	});
}

export default Component;
