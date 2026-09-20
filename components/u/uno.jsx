import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/not_us-ao.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="not_us-ao"/>`,
		"fallback": "simple-icons:uno",
	});
}

export default Component;
