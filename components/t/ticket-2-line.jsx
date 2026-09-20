import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x6419mrrx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x6419mrrx"/>`,
		"fallback": "ri:ticket-2-line",
	});
}

export default Component;
