import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/db92g1b6n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="db92g1b6n"/>`,
		"fallback": "ri:lock-line",
	});
}

export default Component;
