import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jeqj8mb4o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jeqj8mb4o"/>`,
		"fallback": "ri:settings-4-fill",
	});
}

export default Component;
