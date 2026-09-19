import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wafrj7bth.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wafrj7bth"/>`,
		"fallback": "hugeicons:pencil-off",
	});
}

export default Component;
