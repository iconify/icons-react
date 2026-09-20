import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uaw1wpsia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uaw1wpsia"/>`,
		"fallback": "ri:rewind-start-mini-line",
	});
}

export default Component;
