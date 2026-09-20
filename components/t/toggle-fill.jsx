import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/utj6gpbeu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="utj6gpbeu"/>`,
		"fallback": "ri:toggle-fill",
	});
}

export default Component;
