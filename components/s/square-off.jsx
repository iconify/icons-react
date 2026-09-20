import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1g56ob0p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f1g56ob0p"/>`,
		"fallback": "mdi:square-off",
	});
}

export default Component;
