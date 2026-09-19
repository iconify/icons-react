import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rn4-zq4ny.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rn4-zq4ny"/>`,
		"fallback": "cbi:shutter-10",
	});
}

export default Component;
