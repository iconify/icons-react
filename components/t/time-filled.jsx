import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/frg81opju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="frg81opju"/>`,
		"fallback": "griddy-icons:time-filled",
	});
}

export default Component;
