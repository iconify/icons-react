import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f45raequf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f45raequf"/>`,
		"fallback": "ri:roadster-fill",
	});
}

export default Component;
