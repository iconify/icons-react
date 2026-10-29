import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nucez9s0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nucez9s0v wm-k"/>`,
		"fallback": "withicons:more-vertical-sketch",
	});
}

export default Component;
