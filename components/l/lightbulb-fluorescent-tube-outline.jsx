import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2i7u1bkr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d2i7u1bkr"/>`,
		"fallback": "mdi:lightbulb-fluorescent-tube-outline",
	});
}

export default Component;
