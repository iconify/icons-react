import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wahrk07ni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wahrk07ni"/>`,
		"fallback": "mdi-light:sim-off",
	});
}

export default Component;
