import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w5g7s0cqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w5g7s0cqi"/>`,
		"fallback": "lets-icons:sound-light",
	});
}

export default Component;
