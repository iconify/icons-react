import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5u5w1b9u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x5u5w1b9u"/>`,
		"fallback": "heroicons:musical-note",
	});
}

export default Component;
