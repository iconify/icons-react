import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dp38xqa3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dp38xqa3n"/>`,
		"fallback": "ri:phone-lock-line",
	});
}

export default Component;
