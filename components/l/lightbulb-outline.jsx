import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vgt6-fbpq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vgt6-fbpq"/>`,
		"fallback": "flowbite:lightbulb-outline",
	});
}

export default Component;
