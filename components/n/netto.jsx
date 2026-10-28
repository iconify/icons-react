import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p1c3kp_ph.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p1c3kp_ph"/>`,
		"fallback": "cbi:netto",
	});
}

export default Component;
