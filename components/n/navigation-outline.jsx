import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zkb7h_7ul.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zkb7h_7ul"/>`,
		"fallback": "eva:navigation-outline",
	});
}

export default Component;
