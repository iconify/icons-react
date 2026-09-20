import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q1fub-b6r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q1fub-b6r"/>`,
		"fallback": "mdi:person-badge",
	});
}

export default Component;
