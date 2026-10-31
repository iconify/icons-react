import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l65nmcgjz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l65nmcgjz"/>`,
		"fallback": "withicons:square-x-gloss",
	});
}

export default Component;
