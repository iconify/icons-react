import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ehs5ddlli.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ehs5ddlli"/>`,
		"fallback": "lets-icons:waterfall-light",
	});
}

export default Component;
