import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fn2990b_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fn2990b_r"/>`,
		"fallback": "boxicons:pen-filled",
	});
}

export default Component;
