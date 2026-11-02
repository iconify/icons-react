import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vlwbs1dqf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vlwbs1dqf"/>`,
		"fallback": "mingcute:user-warning-line",
	});
}

export default Component;
