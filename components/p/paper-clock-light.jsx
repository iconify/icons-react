import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ktpt-8bty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ktpt-8bty"/>`,
		"fallback": "stash:paper-clock-light",
	});
}

export default Component;
