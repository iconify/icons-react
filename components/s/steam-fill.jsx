import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e5n7i0b6v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e5n7i0b6v"/>`,
		"fallback": "ri:steam-fill",
	});
}

export default Component;
