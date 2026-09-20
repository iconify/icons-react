import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xo324-b7r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xo324-b7r"/>`,
		"fallback": "roentgen:lander",
	});
}

export default Component;
