import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wp2qei.css';
import '../../css/s/so-from-66.css';
import '../../css/f/fill-to-1.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wp2qei"/>`,
		"fallback": "line-md:square-filled",
	});
}

export default Component;
