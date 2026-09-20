import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/narv8ub5a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="narv8ub5a"/>`,
		"fallback": "ri:no-credit-card-fill",
	});
}

export default Component;
