import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/re7iq1b8x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="re7iq1b8x"/>`,
		"fallback": "noviair:smartphone-off",
	});
}

export default Component;
